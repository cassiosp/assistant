import { Task } from '../entities/task.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksRepository {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  save(task: Task): Task {
    this.tasks.push(task);
    return task;
  }
}
