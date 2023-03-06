import { EventPublisherBase } from "src/libs";
import { ClientDomainBase } from '../../../entities/Order-domain/client-domain-entity';

export class ClientAddEventPublisher  extends EventPublisherBase<ClientDomainBase>  {
    publish(): void {
        console.log('Ta todo funcionando o  a lo mejor no y este console log nunca se va  a ver ')
    }
}
