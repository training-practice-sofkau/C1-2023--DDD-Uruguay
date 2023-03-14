import { PrimaryColumn,Column, Entity } from "typeorm";

@Entity('training_field', {schema: 'public'})
export class TrainingFieldPostgreEntity {

    @PrimaryColumn('uuid', {
        primary: true,
        name: 'training_field_id',
    })
    trainingFieldId: string;
    
    @Column('character varying', {name: 'name', length: 40})
    name: string;
    
    @Column('character varying', {name: 'town', length: 40})
    town: string;
}