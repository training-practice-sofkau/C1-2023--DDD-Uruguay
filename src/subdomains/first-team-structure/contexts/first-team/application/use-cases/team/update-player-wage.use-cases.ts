import { IPlayerDomainService, IUpdatedPlayerWageResponse, IUpdatePlayerWageCommand, PlayerDomainEntity, TeamAggregate, UpdatedPlayerWageEventPublisher, WageValueObject } from "../../../domain";
import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { IUseCase } from '../../../../../../../libs/sofka/interface/use-case.interface';
import { ValueObjectException } from "src/libs";

export class UpdatePlayerWageUseCases<
    Command extends IUpdatePlayerWageCommand,
    Response extends IUpdatedPlayerWageResponse
>
extends ValueObjectErrorHandler 
implements IUseCase<Command, Response>
{
    private readonly teamAggregate: TeamAggregate;

    constructor(
        private readonly playerService: IPlayerDomainService,
        private readonly updatedPlayerWageEventPublisher: UpdatedPlayerWageEventPublisher,
    ) {
        super();
        this.teamAggregate = new TeamAggregate({playerService, updatedPlayerWageEventPublisher})
    }
    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command) {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        return this.executeTeamAggregateRoot({playerId: command.playerId, wage: ValueObject.valueOf()} as Command)
    }

    createValueObject(command: Command): WageValueObject {
        if(command.wage instanceof WageValueObject) return command.wage;
        return new WageValueObject(command.wage);
    }

    validateValueObject(valueObject: WageValueObject) {

        if(valueObject instanceof WageValueObject && valueObject.hasErrors()) this.setErrors(valueObject.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'UpdatePlayerWageUseCase got some errors',
            this.getErrors(),
        );
    }

    executeTeamAggregateRoot(update: Command): Promise<PlayerDomainEntity | null> {
        return this.teamAggregate.updatePlayerWage(update);
    }
}
