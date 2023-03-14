import { AddedTrainerEventPublisher, AddedTrainingEquipmentEventPublisher, AddedTrainingFieldEventPublisher, AddedWorkoutEventPublisher, RegisteredTrainingEventPublisher, UpdatedDurationEventPublisher, UpdatedNameEventPublisher, UpdatedTrainerSpecialtyEventPublisher, UpdatedTrainingEquipmentTypeEventPublisher, UpdatedTrainingFieldNameEventPublisher, UpdatedWorkoutGoalEventPublisher } from "../../events/publishers/training";
import { ITrainerDomainService, ITrainingDomainService, ITrainingEquipmentDomainService, ITrainingFieldDomainService, IWorkoutDomainService } from "../../services";

export interface TrainingAggregateHelper {
    readonly trainingService?: ITrainingDomainService,
    readonly trainingEquipmentService?: ITrainingEquipmentDomainService,
    readonly trainingFieldService?: ITrainingFieldDomainService,
    readonly trainerService?: ITrainerDomainService,
    readonly workoutService?: IWorkoutDomainService,
    readonly registeredTrainingEventPublisher?: RegisteredTrainingEventPublisher,
    readonly addedTrainingEquipmentEventPublisher?: AddedTrainingEquipmentEventPublisher,
    readonly addedTrainingFieldEventPublisher?: AddedTrainingFieldEventPublisher,
    readonly addedTrainerEventPublisher?: AddedTrainerEventPublisher,
    readonly addedWorkoutEventPublisher?: AddedWorkoutEventPublisher,
    readonly updatedDurationEventPublisher?: UpdatedDurationEventPublisher,
    readonly updatedTrainingEquipmentTypeEventPublisher?: UpdatedTrainingEquipmentTypeEventPublisher,
    readonly updatedNameEventPublisher?: UpdatedNameEventPublisher,
    readonly updatedTrainingFieldNameEventPublisher?: UpdatedTrainingFieldNameEventPublisher,
    readonly updatedTrainerSpecialtyEventPublisher?: UpdatedTrainerSpecialtyEventPublisher,
    readonly updatedWorkoutGoalEventPublisher?: UpdatedWorkoutGoalEventPublisher,
}