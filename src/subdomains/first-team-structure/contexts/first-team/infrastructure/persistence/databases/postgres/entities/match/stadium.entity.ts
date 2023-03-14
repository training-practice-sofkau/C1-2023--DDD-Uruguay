import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('stadium', {schema: 'public'})
export class StadiumPostgreEntity {

    @PrimaryColumn('uuid', {
        primary: true,
        name: 'stadium_id',
    })
    stadiumId: string;
    
    @Column('integer', {name: 'capacity',})
    capacity: number;
    
    @Column('integer', {name: 'squareMeters',})
    squareMeters: number;
    
    @Column('character varying', {name: 'name', length: 40})
    name: string;
    
    @Column('character varying', {name: 'town', length: 40})
    town: string;
}