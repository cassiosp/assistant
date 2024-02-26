import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { createMock } from '@golevelup/ts-jest';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService],
    })
      .useMocker(createMock)
      .compile();

    service = module.get(TasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
