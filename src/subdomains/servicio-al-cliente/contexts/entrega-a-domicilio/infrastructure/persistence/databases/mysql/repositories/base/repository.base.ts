export interface IRepository<T> {
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T>;
    create(entity: T): Promise<T | null>;

    delete(id: string): Promise<boolean>;
}