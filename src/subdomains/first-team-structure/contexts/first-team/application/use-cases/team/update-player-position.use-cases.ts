import { IPlayerDomainService, IUpdatedPlayerPositionResponse, IUpdatePlayerPositionCommand, PlayerDomainEntity, PositionValueObject, TeamAggregate, UpdatedPlayerPositionEventPublisher } from "../../../domain";
import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { IUseCase, ValueObjectException } from "src/libs";

export class UpdatePlayerPositionUseCases<
    Command extends IUpdatePlayerPositionCommand,
    Response extends IUpdatedPlayerPositionResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly teamAggregate: TeamAggregate;

    constructor(
        private readonly playerService: IPlayerDomainService,
        private readonly updatedPlayerPositionEventPublisher: UpdatedPlayerPositionEventPublisher,
    ) {
        super();
        this.teamAggregate = new TeamAggregate({playerService, updatedPlayerPositionEventPublisher})
    }
    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command) {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        return this.executeTeamAggregateRoot({playerId: command.playerId, position: ValueObject} as Command)
    }

    createValueObject(command: Command): PositionValueObject {
        if(command.position instanceof PositionValueObject) return command.position;
        return new PositionValueObject(command.position);
    }

    validateValueObject(valueObject: PositionValueObject) {

        if(valueObject instanceof PositionValueObject && valueObject.hasErrors()) this.setErrors(valueObject.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'UpdatePlayerWageUseCase got some errors',
            this.getErrors(),
        );
    }

    executeTeamAggregateRoot(update: Command): Promise<PlayerDomainEntity | null> {
        return this.teamAggregate.updatePlayerPosition(update);
    }
}
