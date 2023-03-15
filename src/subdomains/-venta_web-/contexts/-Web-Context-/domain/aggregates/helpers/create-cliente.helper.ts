import { AggregateRootException } from "src/libs";
import { ClienteDomainEntity } from "../../entities";
import { ClienteCreadoEventPublisher } from "../../events";
import { IClienteService, ICompraService } from "../../services";
import { ICreateClienteMethod } from "../../interfaces";

export const CreateClienteHelper = async (
    entity: ClienteDomainEntity,
    service?: IClienteService,
    event?: ClienteCreadoEventPublisher): Promise<ClienteDomainEntity> => {

    if (!service)
        throw new AggregateRootException('IClienteService no se encuentra definido');

    if (!event)
        throw new AggregateRootException('ClienteCreadoEventPublisher no se encuentra definido');

    event.response = await service.createCliente(entity as ICreateClienteMethod);
    event.publish();

    return event.response;
};

