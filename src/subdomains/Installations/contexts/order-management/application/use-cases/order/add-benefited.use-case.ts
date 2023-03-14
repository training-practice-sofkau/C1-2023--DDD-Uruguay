import {
  IUseCase,
  ValueObjectErrorHandler,
  ValueObjectException,
} from '../../../../../../../libs/sofka';
import { OrderAggregate } from '../../../domain/aggregates';
import { BenefitedDomainEntityBase } from '../../../domain/entities';
import { IBenefitedDomainEntity } from '../../../domain/entities/interfaces';
import { RegisteredOrderEventPublisherBase } from '../../../domain/events';
import {
  IcreateBenefitedCommand,
} from '../../../domain/interfaces/commands/order';
import {
  IcreateBenefitedResponse,
} from '../../../domain/interfaces/responses/order';
import { IOrderDomainService } from '../../../domain/services';
import {
  BenefitedAddressValueObject,
  BenefitedCompanyIdValueObject,
  BenefitedNameValueObject,
  BenefitedPhoneValueObject,
} from '../../../domain/value-objects';

export class createBenefitedUseCase<
    Command extends IcreateBenefitedCommand = IcreateBenefitedCommand,
    Response extends IcreateBenefitedResponse = IcreateBenefitedResponse
  >
  extends ValueObjectErrorHandler
  implements IUseCase<Command, Response>
{
  private readonly orderAggregateRoot: OrderAggregate;

  constructor(
    private readonly orderService: IOrderDomainService,
    private readonly registeredOrderEventPublisherBase: RegisteredOrderEventPublisherBase
  ) {
    super();
    this.orderAggregateRoot = new OrderAggregate({
      orderService,
      registeredOrderEventPublisherBase,
    });
  }

  async execute(command?: Command): Promise<Response> {
    const data = await this.executeCommand(command);

    return { success: data ? true : false, data } as unknown as Response;
  }

  private async executeCommand(
    command: Command
  ): Promise<BenefitedDomainEntityBase | null> {
    const ValueObject = this.createValueObject(command);
    this.validateValueObject(ValueObject);
    const entity = this.createEntityBenefitedDomain(ValueObject);
    return this.executeOrderAggregateRoot(entity);
  }

  private createValueObject(command: Command): IBenefitedDomainEntity {
    const name = new BenefitedNameValueObject(command.name);
    const phone = new BenefitedPhoneValueObject(command.phone);
    const address = new BenefitedAddressValueObject(command.address);
    const companyId =
      command.companyId instanceof BenefitedCompanyIdValueObject
        ? command.companyId
        : new BenefitedCompanyIdValueObject(command.companyId.toString());

    return {
      name,
      phone,
      address,
      companyId,
    };
  }

  private validateValueObject(valueObject: IBenefitedDomainEntity): void {
    const { name, phone, address, companyId } = valueObject;

    if (name instanceof BenefitedNameValueObject && name.hasErrors())
      this.setErrors(name.getErrors());

    if (phone instanceof BenefitedPhoneValueObject && phone.hasErrors())
      this.setErrors(phone.getErrors());

    if (address instanceof BenefitedAddressValueObject && address.hasErrors())
      this.setErrors(address.getErrors());

    if (
      companyId instanceof BenefitedCompanyIdValueObject &&
      companyId.hasErrors()
    )
      this.setErrors(companyId.getErrors());

    if (this.hasErrors() === true)
      throw new ValueObjectException(
        "Hay algunos errores en el comando ejecutado por createBenefitedUserCase",
        this.getErrors()
      );
  }

  private createEntityBenefitedDomain(
    valueObject: IBenefitedDomainEntity
  ): BenefitedDomainEntityBase {
    const { name, phone, address, companyId } = valueObject;

    return new BenefitedDomainEntityBase({
      name: name.valueOf(),
      phone: phone.valueOf(),
      address: address.valueOf(),
      companyId: companyId.valueOf(),
    });
  }

  private executeOrderAggregateRoot(
    entity: BenefitedDomainEntityBase
  ): Promise<BenefitedDomainEntityBase | null> {
    return this.orderAggregateRoot.createBenefited(entity);
  }
}
