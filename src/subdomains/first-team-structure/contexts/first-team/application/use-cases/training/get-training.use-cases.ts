import { AggregateRootException, IUseCase, ValueObjectErrorHandler } from 'src/libs';
import { ITrainingFieldDomainService, TrainingAggregate } from '../../../domain';
import { IGetTrainingCommand } from '../../../domain/interfaces/commands/training/get-training.command';
import { IGotTrainingResponse } from '../../../domain/interfaces/responses/training/got-training.response';
import { TrainingPostgreService } from '../../../infrastructure/persistence/databases/postgres/services/training/training.service';
import { TrainingDomainEntity } from '../../../domain/entities/training.domain-entity';
export class GetTrainingUseCase<
    Command extends IGetTrainingCommand,
    Response extends IGotTrainingResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly trainingAggregate: TrainingAggregate;

    constructor(
        private readonly trainingService: TrainingPostgreService,
    ) {
        super();
        this.trainingAggregate = new TrainingAggregate({trainingService})
    }
    async execute(command?: Command): Promise<Response> {
        return {success: true, data: this.executeTrainingAggregateRoot(command)} as Response
    }

    executeTrainingAggregateRoot(command: Command): TrainingDomainEntity {
        let entity: TrainingDomainEntity;
        this.trainingAggregate.getTraining(command.trainingId)
        .then(iEntity => entity = iEntity)
        .catch(() => new AggregateRootException('Training Field entity not founded'))

        return entity;
    }
}