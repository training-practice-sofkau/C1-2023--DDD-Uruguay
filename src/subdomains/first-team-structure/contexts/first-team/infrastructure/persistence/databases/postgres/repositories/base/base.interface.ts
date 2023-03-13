import { Entity } from 'typeorm';

export interface IBase<Entity> {
    create(entity: Entity): Promise<Entity>;
    update(id: string, entity: Entity): Promise<Entity>;
    find(): Promise<Entity[]>
    findOne(id: string): Promise<Entity>
}