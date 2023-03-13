export interface IRepository<Entity> {
  findAll(...args: any): Promise<Entity[]>;
  findById(id: string): Promise<Entity>;
  create(entity: Entity): Promise<Entity>;
  update(id: string, entity: Entity): Promise<Entity>;
  delete(id: string): Promise<boolean>;
}
