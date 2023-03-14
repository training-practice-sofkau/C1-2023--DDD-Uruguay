import { EventPublisherBase } from '@sofka';
import { ClientDomainEntitybase } from '../../entities/client.domain-entity';

export abstract class RegisteredClientEventPublisherBase<
  Response = ClientDomainEntitybase,
> extends EventPublisherBase<Response>
{
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'consultory-system.registered-client',
      JSON.stringify({ data: this.response })
    )
  }

}
