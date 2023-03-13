import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { CoachDomainEntity, ICoachDomainService, IUpdateCoachWageCommand, IUpdatedCoachWageResponse, WageValueObject } from "../../../domain";
import { UpdatedCoachWageEventPublisher } from '../../../domain/events/publishers/team/updated-coach-wage.event-publisher';
import { TeamAggregate } from '../../../domain/aggregates/team.aggregate';

export class UpdateCoachWageUseCases<
Command extends IUpdateCoachWageCommand,
Response extends IUpdatedCoachWageResponse
> 
extends ValueObjectErrorHandler
implements IUseCase<Command, Response> {
    private readonly teamAggregate: TeamAggregate;

    constructor(
        private readonly coachService: ICoachDomainService,
        private readonly updatedCoachWageEventPublisher: UpdatedCoachWageEventPublisher,
    ) {
        super();
        this.teamAggregate = new TeamAggregate({coachService, updatedCoachWageEventPublisher})
    }
    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command) {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        return this.executeTeamAggregateRoot({coachId: command.coachId, wage: ValueObject} as Command)
    }

    createValueObject(command: Command): WageValueObject {
        if(command.wage instanceof WageValueObject) return command.wage
        return new WageValueObject(command.wage);
    }

    validateValueObject(valueObject: WageValueObject) {

        if(valueObject instanceof WageValueObject && valueObject.hasErrors()) this.setErrors(valueObject.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'UpdateCoachWageUseCase got some errors',
            this.getErrors(),
        );
    }

    executeTeamAggregateRoot(update: Command): Promise<CoachDomainEntity | null> {
        return this.teamAggregate.updateCoachWage(update);
    }
}
