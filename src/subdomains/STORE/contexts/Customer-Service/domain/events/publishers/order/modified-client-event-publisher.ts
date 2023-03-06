import { EventPublisherBase } from 'src/libs';
import { ClientDomainBase } from '../../../entities/Order-domain/client-domain-entity';
export class ClientModifiedEventPublisher extends EventPublisherBase<ClientDomainBase> {
    publish(): void {
console.log("Update realizado")    }
}
