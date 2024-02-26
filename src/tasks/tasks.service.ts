import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { TaskDto } from './dto/task.dto';
import { v4 as uuidv4 } from 'uuid';
import { TasksRepository } from './repositories/tasks-repository.service';

@Injectable()
export class TasksService {
  constructor(private readonly taskRepository: TasksRepository) {
    this.taskRepository = taskRepository;
  }

  save(taskDto: TaskDto): TaskDto {
    const task = this.entityFromTaskDto(taskDto);

    const savedTask = this.taskRepository.save(task);

    return this.dtoFromTaskEntity(savedTask);
  }

  findAll(): TaskDto[] {
    return this.taskRepository
      .findAll()
      .map((task) => this.dtoFromTaskEntity(task));
  }

  private entityFromTaskDto(taskDto: TaskDto) {
    const task = new Task();
    task.title = taskDto.title;
    task.description = taskDto.description;
    task.done = taskDto.done;
    task.id = uuidv4();
    return task;
  }

  private dtoFromTaskEntity(savedTask: Task) {
    const taskToReturn = new TaskDto(savedTask.id);
    taskToReturn.title = savedTask.title;
    taskToReturn.description = savedTask.description;
    taskToReturn.done = savedTask.done;
    return taskToReturn;
  }
}
