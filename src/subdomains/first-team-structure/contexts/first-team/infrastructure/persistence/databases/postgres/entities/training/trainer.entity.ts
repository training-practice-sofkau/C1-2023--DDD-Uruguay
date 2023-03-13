import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('trainer', {schema: 'public'})
export class TrainerPostgreEntity {
    @PrimaryColumn('uuid', {
        primary: true,
        name: 'trainer_id',
    })
    trainerId: string;

    @Column('integer', {name: 'age',})
    age: number;
    
    @Column('character varying', {name: 'full_name', length: 40})
    fullName: string;
    
    @Column('character varying', {name: 'country', length: 40})
    country: string;
    
    @Column('character varying', {name: 'specialty', length: 40})
    specialty: string;
}