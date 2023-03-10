export interface IRegisterTrainingCommand {
    trainingId: string,
    duration: number,
    teamId: string,
    trainingEquipmentsIds: Array<string>,
    trainingField: string,
    name: string,
    trainerId: string,
    workoutsIds: Array<string>
}