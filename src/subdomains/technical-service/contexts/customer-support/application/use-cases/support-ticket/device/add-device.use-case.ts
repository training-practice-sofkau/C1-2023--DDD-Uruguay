import { IAddDeviceCommand } from '../../../../domain/interfaces/commands/support-ticket/device/add-device.command';
import { ValueObjectErrorHandler } from '../../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { IUseCase } from '../../../../../../../../libs/sofka/interface/use-case.interface';
import { SupportTicketAggregate } from '../../../../domain/aggregates/support-ticket/support-ticket.aggregate';
import { IDeviceDomainService } from '../../../../domain/services/support-ticket/device.domain-service';
import { DeviceAddedEventPublisherBase } from '../../../../domain/events/publishers/support-ticket/device/device-added.event-publisher';
import { IDeviceDomainEntity } from '../../../../domain/entities/interfaces/support-ticket/device.domain-entity.interface';
import { DeviceTypeValueObject } from '../../../../domain/value-objects/device/device-type.value-object';
import { IssueValueObject } from '../../../../domain/value-objects/device/issue.value-object';
import { ValueObjectException } from 'src/libs';
import { DeviceDomainEntityBase } from '../../../../domain/entities/support-ticket/device.domain-entity/device.domain-entity';
import { IDeviceAddedResponse } from '../../../../domain/interfaces/responses/support-ticket/device/device-added.response';

export class AddDeviceUseCase<
    Command extends IAddDeviceCommand = IAddDeviceCommand,
    Response extends IDeviceAddedResponse = IDeviceAddedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response> {


    private readonly supportTicketAggregateRoot: SupportTicketAggregate;

    constructor(
        private readonly deviceService: IDeviceDomainService,
        private readonly deviceAddedEventPublisherBase: DeviceAddedEventPublisherBase
    ) {
        super();
        this.supportTicketAggregateRoot = new SupportTicketAggregate({
            deviceService,
            deviceAddedEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {

        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response;
    }



    /**
     * executes all the steps needed to make a new entity
     *
     * @private
     * @param {Command} command
     * @return {*}  {Promise < IDeviceDomainEntity>}
     * @memberof AddDeviceUseCase
     */
    private async executeCommand(command: Command): Promise<IDeviceDomainEntity> {

        const VO = this.createValueObject(command);

        this.validateValueObject(VO);

        const entity = this.createDeviceEntityDomain(VO);

        return this.executeAddDeviceAggregateRoot(entity);

    }
 
    /**
     * Generates a new Value Object of type Device
     *
     * @param {Command} command
     * @return {*}  {IDeviceDomainEntity}
     * @memberof AddDeviceUseCase
     */
    createValueObject(command: Command): IDeviceDomainEntity {

        const deviceType = new DeviceTypeValueObject(command.deviceType);
        const issues = new IssueValueObject(command.issues);

        return {
            deviceType,
            issues
        }
    }


    /**
     * Validates that the information is valid     *
     *
     * @param {IDeviceDomainEntity} VO
     * @memberof AddDeviceUseCase
     */
    validateValueObject(VO: IDeviceDomainEntity) {

        const {
            deviceType,
            issues
        } = VO;

        //validates devicetype
        if (deviceType instanceof DeviceTypeValueObject && deviceType.hasErrors())
            this.setErrors(deviceType.getErrors());

        //validates issues
        if (issues instanceof IssueValueObject && issues.hasErrors())
            this.setErrors(issues.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'AddDevice command execution return some errors!',
                this.getErrors(),
        );
    }


    /**
     * Creates and returns a new Device Entity
     *
     * @param {IDeviceDomainEntity} VO
     * @return {*} 
     * @memberof AddDeviceUseCase
     */
    createDeviceEntityDomain(VO: IDeviceDomainEntity) {
        const {
            deviceType,
            issues
        } = VO;

        return new DeviceDomainEntityBase({
            deviceType: deviceType.valueOf(),
            issues: issues
        })
    }


    /**
     * Executes the method on the aggregate
     *
     * @param {DeviceDomainEntityBase} entity
     * @return {*}  {(Promise< IDeviceDomainEntity | null >)}
     * @memberof AddDeviceUseCase
     */
    executeAddDeviceAggregateRoot(
        entity: DeviceDomainEntityBase): Promise< IDeviceDomainEntity | null > {

            return this.supportTicketAggregateRoot.AddDevice(entity);
    }
    
}