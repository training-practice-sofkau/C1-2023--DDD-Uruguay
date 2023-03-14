import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { TrainingPostgreEntity } from "./training.entity";

@Entity('workout', {schema: 'public'})
export class WorkoutPostgreEntity {

    @PrimaryColumn('uuid', {
        primary: true,
        name: 'workout_id',
    })
    workoutId: string;

    @Column('character varying', {name: 'training_id'})
    @ManyToMany(() => TrainingPostgreEntity, training => training.trainingId)
    training: TrainingPostgreEntity;
    
    @Column('character varying', {name: 'name', length: 40})
    name: string;
    
    @Column('character varying', {name: 'type', length: 40})
    type: string;
    
    @Column('character varying', {name: 'goal', length: 40})
    goal: string;
}