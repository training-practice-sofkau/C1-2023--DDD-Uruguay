import { ClientDomainEntitybase } from '../../../entities';
import { IClientDomainService } from '../../../services';
import { RegisteredClientEventPublisherBase } from '../../../events';

export const CreateClient = async (
    client: ClientDomainEntitybase,
    clientService: IClientDomainService,
    registeredClientEventPublisher: RegisteredClientEventPublisherBase
): Promise<ClientDomainEntitybase | null> => {
    const result = await clientService.registerClient(client);
    registeredClientEventPublisher.response = result;
    registeredClientEventPublisher.publish();
    return result;
}