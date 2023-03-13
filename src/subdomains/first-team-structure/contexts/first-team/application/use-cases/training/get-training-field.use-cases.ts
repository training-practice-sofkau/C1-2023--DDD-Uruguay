import { IGetTrainingFieldCommand } from '../../../domain/interfaces/commands/training/get-training-field.command';
import { IGotTrainingFieldResponse } from '../../../domain/interfaces/responses/training/got-training-field.response';
import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { AggregateRootException, IUseCase } from 'src/libs';
import { ITrainingFieldDomainService, TrainingAggregate, TrainingFieldDomainEntity } from '../../../domain';
export class GetTrainingFieldUseCase<
    Command extends IGetTrainingFieldCommand,
    Response extends IGotTrainingFieldResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly trainingAggregate: TrainingAggregate;

    constructor(
        private readonly trainingFieldService: ITrainingFieldDomainService,
    ) {
        super();
        this.trainingAggregate = new TrainingAggregate({trainingFieldService})
    }
    async execute(command?: Command): Promise<Response> {
        return {success: true, data: this.executeTrainingAggregateRoot(command)} as Response
    }

    executeTrainingAggregateRoot(command: Command): TrainingFieldDomainEntity {
        let entity: TrainingFieldDomainEntity;
        this.trainingAggregate.getTrainingField(command.trainingFieldId)
        .then(iEntity => entity = iEntity)
        .catch(() => new AggregateRootException('Training Field entity not founded'))

        return entity;
    }
}