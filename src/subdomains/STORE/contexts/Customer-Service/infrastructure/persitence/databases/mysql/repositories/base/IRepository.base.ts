export interface IRepositoriBase<Entity> {
    findById(id: string): Promise<Entity>;
    create(entity: Entity): Promise<Entity>;
    update(id: string, entity: Entity): Promise<Entity>;
    delete(id: string): Promise<boolean>;
}