import { ValueObjectErrorHandler, IUseCase, ValueObjectException, AggregateUpdateException } from '../../../../../../../libs/sofka';

import { IOrderDomainService } from '../../../domain/services';
import { RegisteredOrderEventPublisherBase } from '../../../domain/events';
import { FeeDomainEntityBase } from '../../../domain/entities';
import { KitModelValueObject } from '../../../domain/value-objects';
import { OrderAggregate } from '../../../domain/aggregates';
import { IUpdateKitModelCommand } from '../../../domain/interfaces/commands/order';
import { IUpdateKitModelResponse } from '../../../domain/interfaces/responses/order';
import { GetOrderUserCase } from '.';

export class UpdateKitModelUseCase<
    Command extends IUpdateKitModelCommand = IUpdateKitModelCommand,
    Response extends IUpdateKitModelResponse = IUpdateKitModelResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly orderAggregateRoot: OrderAggregate;

    constructor(
        private readonly orderService: IOrderDomainService,
        private readonly orderGet: GetOrderUserCase,
        private readonly registeredOrderEventPublisherBase: RegisteredOrderEventPublisherBase,
    ) {
        super();
        this.orderAggregateRoot = new OrderAggregate({
            orderService,
            registeredOrderEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(
        command: Command
    ): Promise<FeeDomainEntityBase | null> {
        this.validateObjectValue(command.model);
        const order = await this.orderGet.execute({ orderId: command.orderId });
        if (order.success) {
            order.data.kit.model = command.model;
            return order.data.kit;
        } else throw new AggregateUpdateException('Hay algunos errores en el comando ejecutado por UpdateKitModelUserCase');
    }

    private validateObjectValue(valueObject: KitModelValueObject): void {

        if (valueObject instanceof KitModelValueObject && valueObject.hasErrors())
            this.setErrors(valueObject.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por UpdateKitModelUserCase',
                this.getErrors(),
            );

    }

}