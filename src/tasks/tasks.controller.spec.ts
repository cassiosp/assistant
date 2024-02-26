import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { createMock } from '@golevelup/ts-jest';

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
    })
      .useMocker(createMock)
      .compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
