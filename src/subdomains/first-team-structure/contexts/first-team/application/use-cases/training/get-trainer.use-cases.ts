import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { AggregateRootException, IUseCase } from 'src/libs';
import { IGetTrainerCommand, IGotTrainerResponse, ITrainerDomainService, TrainerDomainEntity, TrainingAggregate } from '../../../domain';
export class GetTrainerUseCase<
    Command extends IGetTrainerCommand,
    Response extends IGotTrainerResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly trainingAggregate: TrainingAggregate;

    constructor(
        private readonly trainerService: ITrainerDomainService,
    ) {
        super();
        this.trainingAggregate = new TrainingAggregate({trainerService})
    }
    async execute(command?: Command): Promise<Response> {
        return {success: true, data: this.executeTrainingAggregateRoot(command)} as Response
    }

    executeTrainingAggregateRoot(command: Command): TrainerDomainEntity {
        let entity: TrainerDomainEntity;
        this.trainingAggregate.getTrainer(command.trainerId)
        .then(iEntity => entity = iEntity)
        .catch(() => new AggregateRootException('Trainer entity not founded'))

        return entity;
    }
}