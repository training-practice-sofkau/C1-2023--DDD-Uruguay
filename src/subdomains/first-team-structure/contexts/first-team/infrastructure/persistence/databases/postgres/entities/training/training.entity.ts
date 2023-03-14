import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { TeamPostgreEntity } from "../team/team.entity";
import { TrainingEquipmentPostgreEntity } from './training-equipment.entity';
import { TrainingFieldPostgreEntity } from './training-field-entity';
import { TrainerPostgreEntity } from './trainer.entity';
import { WorkoutPostgreEntity } from "./workout.entity";

@Entity('training', {schema: 'public'})
export class TrainingPostgreEntity {
    @PrimaryColumn('uuid', {
        primary: true,
        name: 'training_id',
    })
    trainingId: string;

    @Column('integer', {name: 'duration',})
    duration: number;
    
    @Column('character varying', {name: 'team_id',})
    @ManyToOne(() => TeamPostgreEntity, team => team.teamId)
    team: TeamPostgreEntity;

    @Column('character varying', {name: 'training_field_id',})
    @ManyToOne(() => TrainingFieldPostgreEntity, trainingField => trainingField.trainingFieldId)
    trainingField: TrainingFieldPostgreEntity;

    @Column('character varying', {name: 'score',})
    name: string;

    @Column('character varying', {name: 'trainer_id',})
    @ManyToOne(() => TrainerPostgreEntity, trainer => trainer.trainerId)
    trainer: TrainerPostgreEntity;
}