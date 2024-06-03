export abstract class InMemoryRepository<T extends { id: number }> {
  private data: T[];

  constructor() {
    this.data = [];
  }

  create(data: T) {
    this.data.push(data);
  }

  async findById(id: number) {
    return this.data.filter((data) => data.id === id);
  }

  async findAll() {
    return this.data;
  }
}
