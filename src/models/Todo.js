export class Todo {
  constructor(data) {
    this.id = Date.now();
    this.title = data?.title || null;
    this.done = data?.done || false;
  }
}
