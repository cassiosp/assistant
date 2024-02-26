import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TasksRepository } from './repositories/tasks-repository.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
})
export class TasksModule {}
