import { EventPublisherBase } from "src/libs";
import { ClientDomainBase } from "../../../entities/Order-domain/client-domain-entity";

export class ClientObtainedEventPublisher  extends EventPublisherBase <ClientDomainBase> {
    publish(): void {
    console.log("Client obtained")  
  }
}
