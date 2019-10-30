export class Task {
  id: string;
  description: string;
  dueDate: number;

  constructor(desc: string, date?: number) {
    this.description = desc;
    this.dueDate = date || 2;
  }
}

