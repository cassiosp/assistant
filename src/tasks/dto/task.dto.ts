// A DTO to manipulate the task entity

export class TaskDto {
  readonly id: string;
  title: string;
  description: string;
  done: boolean;

  constructor(id: string = null) {
    this.id = id;
  }
}
