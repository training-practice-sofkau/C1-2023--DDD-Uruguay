import { PrimaryColumn, Column, Entity, BeforeInsert } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('rival', {schema: 'public'})
export class RivalPostgreEntity {

    @PrimaryColumn('uuid', {
        primary: true,
        name: 'rival_id',
    })
    rivalId: string;
    
    @Column('character varying', {name: 'name', length: 40})
    name: string;
    
    @Column('character varying', {name: 'town', length: 40})
    town: string;

    @BeforeInsert()
    generateUuid?() {
        this.rivalId = uuidv4();
    }
}