import { IEventPublisher } from "../interface/event-publisher.interface";

/**
 * Abstract class representing an event publisher
 *
 * @export
 * @abstract
 * @class EventPublisherBase
 * @template Response Type of response published
 */
export abstract class EventPublisherBase<Response> implements IEventPublisher {
  private _response: Response | Response[] | null;

  constructor(private readonly eventPublisher: IEventPublisher) {}

  get response(): Response | Response[] | null {
    return this._response;
  }

  set response(value: Response | Response[] | null) {
    this._response = value;
  }

  send<Result, Input = Response>(pattern: any, data: Input): Promise<Result> {
    return this.eventPublisher.send(pattern, data);
  }

  emit<Result = any, Input = Response>(
    pattern: any,
    data: Input,
  ): Promise<Result> {
    return this.eventPublisher.emit(pattern, data);
  }

  abstract publish<Result = any>(): Promise<Result>;
}
