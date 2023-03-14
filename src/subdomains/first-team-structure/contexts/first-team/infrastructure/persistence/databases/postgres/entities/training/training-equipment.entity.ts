import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { TrainingPostgreEntity } from "./training.entity";

@Entity('training_equipment', {schema: 'public'})
export class TrainingEquipmentPostgreEntity {

    @PrimaryColumn('uuid', {
        primary: true,
        name: 'training_equipment_id',
    })
    trainingEquipmentId: string;

    @Column('character varying', {name: 'training_id'})
    @ManyToMany(() => TrainingPostgreEntity, training => training.trainingId)
    training: TrainingPostgreEntity;
    
    @Column('character varying', {name: 'name', length: 40})
    name: string;
    
    @Column('character varying', {name: 'type', length: 40})
    type: string;
}