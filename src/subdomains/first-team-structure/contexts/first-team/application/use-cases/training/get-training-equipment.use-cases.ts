import { IGetTrainingEquipmentsCommand } from '../../../domain/interfaces/commands/training/get-training-equipment.command';
import { IGotTrainingEquipmentsResponse } from '../../../domain/interfaces/responses/training/got-training-equipment.response';
import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { AggregateRootException, IUseCase } from 'src/libs';
import { ITrainingEquipmentDomainService, TrainingAggregate, TrainingEquipmentDomainEntity } from '../../../domain';
export class GetTrainingEquipments<
    Command extends IGetTrainingEquipmentsCommand,
    Response extends IGotTrainingEquipmentsResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly trainingAggregate: TrainingAggregate;

    constructor(
        private readonly trainingEquipmentService: ITrainingEquipmentDomainService,
    ) {
        super();
        this.trainingAggregate = new TrainingAggregate({trainingEquipmentService})
    }
    async execute(command?: Command): Promise<Response> {
        return {success: true, data: this.executeTrainingAggregateRoot(command)} as Response
    }

    executeTrainingAggregateRoot(command: Command): TrainingEquipmentDomainEntity[] {
        let entitys: TrainingEquipmentDomainEntity[];
        this.trainingAggregate.getTrainingEquipment(command.trainingEquipmentsId)
        .then(iEntitys => entitys = iEntitys)
        .catch(() => new AggregateRootException('Training Equipments entitys not founded'))

        return entitys;
    }
}