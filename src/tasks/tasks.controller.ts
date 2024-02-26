import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() taskDto: TaskDto) {
    return this.tasksService.save(taskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }
}
