import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from '../../../../../../../libs/sofka';

import { IOrderDomainService } from '../../../domain/services';
import { RegisteredOrderEventPublisherBase } from '../../../domain/events';
import { EmployedDomainEntityBase  } from '../../../domain/entities';
import { IEmployedDomainEntity } from '../../../domain/entities/interfaces';
import {
    EmployedNameValueObject,
    EmployedPhoneValueObject
} from '../../../domain/value-objects';
import { OrderAggregate } from '../../../domain/aggregates';
import { IAddEmployedCommand } from '../../../domain/interfaces/commands/order';
import { IAddEmployedResponse } from '../../../domain/interfaces/responses/order';

export class AddEmployedUseCase<
    Command extends IAddEmployedCommand = IAddEmployedCommand,
    Response extends IAddEmployedResponse = IAddEmployedResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly orderAggregateRoot: OrderAggregate;

    constructor(
        private readonly orderService: IOrderDomainService,
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
    ): Promise<EmployedDomainEntityBase | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createEntityEmployedDomain(ValueObject);
        return this.executeOrderAggregateRoot(entity);
    }

    private createValueObject(
        command: Command
    ): IEmployedDomainEntity {

        const name = new EmployedNameValueObject(command.name);
        const phone = new EmployedPhoneValueObject(command.phone);

        return {
            name,
            phone
        }
    }

    private validateValueObject(
        valueObject: IEmployedDomainEntity
    ): void {
        const {
            name,
            phone
        } = valueObject

        if (name instanceof EmployedNameValueObject && name.hasErrors())
            this.setErrors(name.getErrors());

        if (phone instanceof EmployedPhoneValueObject && phone.hasErrors())
            this.setErrors(phone.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por AddEmployedUserCase',
                this.getErrors(),
            );

    }

    private createEntityEmployedDomain(
        valueObject: IEmployedDomainEntity
    ): EmployedDomainEntityBase {

        const {
            name,
            phone
        } = valueObject

        return new EmployedDomainEntityBase({
            name: name.valueOf(),
            phone: phone.valueOf()
        })
    }

    private executeOrderAggregateRoot(
        entity: EmployedDomainEntityBase,
    ): Promise<EmployedDomainEntityBase | null> {
        return this.orderAggregateRoot.addEmployed(entity)
    }
}