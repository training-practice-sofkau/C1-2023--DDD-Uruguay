import { EventPublisherBase } from 'src/libs';
import { ClientDomainBase } from '../../../../entities/Order-domain/client-domain-entity';
export class NameModifiedEventPublisher extends EventPublisherBase<ClientDomainBase>{
    publish(): void {
console.log("nombre del cliente modificado")    }
}
