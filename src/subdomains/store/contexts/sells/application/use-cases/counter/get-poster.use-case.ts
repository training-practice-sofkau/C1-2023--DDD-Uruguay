import { ValueObjectErrorHandler, IUseCase } from 'src/libs';
import { CounterAggregate, IPosterDomainService, PosterDomainEntity, GettedPosterEventPublisherBase } from '../../../domain';
import { IGetPosterCommand } from '../../../domain/interfaces/commands/counter/get-poster.command';
import { IGettedPosterResponse } from '../../../domain/interfaces/responses/counter/getted-poster.response';

export class GetPosterUseCase<
    Command extends IGetPosterCommand = IGetPosterCommand,
    Response extends IGettedPosterResponse = IGettedPosterResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly counterAggregateRoot: CounterAggregate

    constructor(
        private readonly posterService: IPosterDomainService,
        private readonly gettedPosterEventPublisherBase: GettedPosterEventPublisherBase
    ) {
        super();
        this.counterAggregateRoot = new CounterAggregate({
            posterService,
            gettedPosterEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command)
        return { success: data ? true : false, data } as unknown as Response
    }

    executeCommand(command: Command): Promise<PosterDomainEntity | null> {
        return this.counterAggregateRoot.getPoster(command.posterId)
    }
}