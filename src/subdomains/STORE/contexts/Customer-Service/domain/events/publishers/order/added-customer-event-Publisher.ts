import { EventPublisherBase } from "src/libs";
import { ClientDomainBase } from '../../../entities/Order-domain/client-domain-entity';

export class ClientAddEventPublisher  extends EventPublisherBase<ClientDomainBase>  {
    publish(): void {
        throw new Error("Method not implemented.");
    }
}
