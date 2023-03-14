export interface IRepositoryEvent<T> {
    findEventById(id: string): Promise<T>;
    createEvent(event: T): Promise<T | null>;
  }
  