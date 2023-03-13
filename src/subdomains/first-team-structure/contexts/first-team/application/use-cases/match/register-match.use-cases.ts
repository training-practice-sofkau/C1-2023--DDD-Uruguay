import { AggregateRootException, IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { DateValueObject, IGetRivalCommand, IGetStadiumCommand, IGetTeamCommand, IGotRivalResponse, IGotStadiumResponse, IGotTeamReponse, IMatchDomainEntity, IMatchDomainService, IRegisteredMatchResponse, IRegisterMatchCommand, MatchAggregate, MatchDomainEntity, RegisteredMatchEventPublisher, ScoreValueObject } from "../../../domain";
import { ITeamDomainEntity } from '../../../domain/entities/interfaces/team.domain-entity.interface';
import { IRivalDomainEntity } from '../../../domain/entities/interfaces/match/rival.domain-entity.interface';
import { IStadiumDomainEntity } from '../../../domain/entities/interfaces/match/stadium.domain-entity.interface';
import { GetTeamUseCase } from "../team/get-team.use-cases";
import { GetRivalUseCases } from "./get-rival.use-cases";
import { GetStadiumUseCase } from "./get-stadium.use-cases";

export class RegisterMatchUseCases<
    Command extends IRegisterMatchCommand,
    Response extends IRegisteredMatchResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly matchAggregate: MatchAggregate;

    constructor(
        private readonly getTeam: GetTeamUseCase<IGetTeamCommand, IGotTeamReponse>,
        private readonly getRival: GetRivalUseCases<IGetRivalCommand, IGotRivalResponse>,
        private readonly getStadium: GetStadiumUseCase<IGetStadiumCommand, IGotStadiumResponse>,
        private readonly matchService: IMatchDomainService,
        private readonly registeredMatchEventPublisher: RegisteredMatchEventPublisher,
    ) {
        super();
        this.matchAggregate = new MatchAggregate({matchService, registeredMatchEventPublisher})
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command): Promise<MatchDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        const entity = this.createEntityMatchDomain(ValueObject);

        return this.executeMatchAggregateRoot(entity)
    }
    
    createValueObject(command: Command): IMatchDomainEntity {
        let team: ITeamDomainEntity;
        let rival: IRivalDomainEntity;
        let stadium: IStadiumDomainEntity;
        const score = new ScoreValueObject(command.score)
        const date = new DateValueObject(command.date)

        this.getTeam.execute({teamId: command.teamId})
        .then(iTeam => team = iTeam.data)
        .catch(() => new AggregateRootException('Team entity not founded'))

        this.getRival.execute({rivalId: command.rivalId})
        .then(iRival => rival = iRival.data)
        .catch(() => new AggregateRootException('Rival entity not founded'))

        this.getStadium.execute({stadiumId: command.stadiumId})
        .then(iStadium => rival = iStadium.data)
        .catch(() => new AggregateRootException('Stadium entity not founded'))

        return {team, score, rival, stadium, date}
    }
    
    validateValueObject(valueObject: IMatchDomainEntity): void {
        const {
            score,
            date
        } = valueObject;

        if(score instanceof ScoreValueObject && score.hasErrors()) this.setErrors(score.getErrors());

        if(date instanceof DateValueObject && date.hasErrors()) this.setErrors(date.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'RegisterMatchUseCase got some errors',
            this.getErrors(),
        );
    }

    createEntityMatchDomain(valueObject: IMatchDomainEntity): MatchDomainEntity {
        const {
            team,
            score,
            rival,
            stadium,
            date
        } = valueObject;

        return new MatchDomainEntity({
            team,
            score,
            rival,
            stadium,
            date
        })
    }

    executeMatchAggregateRoot(entity: MatchDomainEntity): Promise<MatchDomainEntity | null> {
        return this.matchAggregate.registerMatch(entity);
    }
}
