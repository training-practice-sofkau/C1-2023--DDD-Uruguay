import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('coach', {schema: 'public'})
export class CoachPostgreEntity {

    @PrimaryColumn('uuid', {
        primary: true,
        name: 'coach_id',
    })
    coachId: string;

    @Column('integer', {name: 'age',})
    age: number;

    @Column('integer', {name: 'wage',})
    wage: number;

    @Column('character varying', {name: 'full_name', length: 40})
    fullName: string;
    
    @Column('character varying', {name: 'country', length: 40})
    country: string;
}