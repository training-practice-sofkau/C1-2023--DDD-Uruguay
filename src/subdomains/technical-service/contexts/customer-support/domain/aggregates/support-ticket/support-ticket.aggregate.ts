import { AggregateRootException } from 'src/libs/sofka/exceptions';
import { RepairsAddedEventPublisherBase, WorkStatusChangedEventPublisherBase} from '../../events/publishers/support-ticket/repairs';

import { DeviceDomainEntityBase } from '../../entities/support-ticket/device.domain-entity/device.domain-entity';

import {
    IOpenNewTicketCommand,
    ICloseTicketCommand,
    IGenerateInvoiceCommand,
    IAddIssueCommand,
    IRemoveIssueCommand,
    IAddRepairsCommand,
    IChangeWorkStatusCommand,

} from '../../interfaces';

import {
    ISupportTicketDomainService,
    IDeviceDomainService,
    IRepairsDomainService
} from '../../services/support-ticket/';


import {
    CloseTicket,
    GenerateInvoice,
    OpenNewTicket,
    AddDevice,
    AddIssue,
    RemoveIssue,
    AddRepair,
    ChangeWorkStatus,

} from './helpers';

import {
    TicketClosedEventPublisherBase,
    InvoiceGeneratedEventPublisherBase,
    DeviceAddedEventPublisherBase,
    IssueAddedEventPublisherBase,
    IssueRemovedEventPublisherBase,
    NewTicketAddedEventPublisherBase

} from '../../events/publishers/support-ticket';
import { IDeviceDomainEntity } from '../../entities/interfaces';



export class SupportTicketAggregate implements ISupportTicketDomainService, IDeviceDomainService, IRepairsDomainService {

    private readonly supportTicketService?: ISupportTicketDomainService;
    private readonly deviceService?: IDeviceDomainService;
    private readonly repairsService?: IRepairsDomainService;
    private readonly newTicketAddedEventPublisherBase?: NewTicketAddedEventPublisherBase;
    private readonly ticketClosedEventPublisherBase?: TicketClosedEventPublisherBase;
    private readonly invoiceGeneratedEventPublisherBase?: InvoiceGeneratedEventPublisherBase;
    private readonly deviceAddedEventPublisherBase?: DeviceAddedEventPublisherBase;
    private readonly issueAddedEventPublisherBase?: IssueAddedEventPublisherBase;
    private readonly issueRemovedEventPublisherBase?: IssueRemovedEventPublisherBase;
    private readonly repairsAddedEventPublisherBase?: RepairsAddedEventPublisherBase;
    private readonly workStatusChangedEventPublisherBase?: WorkStatusChangedEventPublisherBase;

    constructor(
        {
            supportTicketService,
            repairsService,
            deviceService,
            newTicketAddedEventPublisherBase,
            ticketClosedEventPublisherBase,
            invoiceGeneratedEventPublisherBase,
            deviceAddedEventPublisherBase,
            issueAddedEventPublisherBase,
            issueRemovedEventPublisherBase,
            repairsAddedEventPublisherBase,
            workStatusChangedEventPublisherBase,

        }: {

            supportTicketService?: ISupportTicketDomainService,
            deviceService?: IDeviceDomainService,
            repairsService?: IRepairsDomainService,
            newTicketAddedEventPublisherBase?: NewTicketAddedEventPublisherBase,
            ticketClosedEventPublisherBase?: TicketClosedEventPublisherBase,
            invoiceGeneratedEventPublisherBase?: InvoiceGeneratedEventPublisherBase,
            deviceAddedEventPublisherBase?: DeviceAddedEventPublisherBase,
            issueAddedEventPublisherBase?: IssueAddedEventPublisherBase,
            issueRemovedEventPublisherBase?: IssueRemovedEventPublisherBase,
            repairsAddedEventPublisherBase?: RepairsAddedEventPublisherBase,
            workStatusChangedEventPublisherBase?: WorkStatusChangedEventPublisherBase,

        }) {

        this.supportTicketService = supportTicketService;
        this.deviceService = deviceService;
        this.repairsService = repairsService;
        this.newTicketAddedEventPublisherBase = newTicketAddedEventPublisherBase;
        this.ticketClosedEventPublisherBase = ticketClosedEventPublisherBase;
        this.invoiceGeneratedEventPublisherBase = invoiceGeneratedEventPublisherBase;
        this.deviceAddedEventPublisherBase = deviceAddedEventPublisherBase;
        this.issueAddedEventPublisherBase = issueAddedEventPublisherBase;
        this.issueRemovedEventPublisherBase = issueRemovedEventPublisherBase;
        this.repairsAddedEventPublisherBase = repairsAddedEventPublisherBase;
        this.workStatusChangedEventPublisherBase = workStatusChangedEventPublisherBase;
    }

    // #region SUPPORT-TICKET methods


    /**
     * Opens a new Support ticket
     *
     * @param {IOpenNewTicketCommand} ticketData
     * @return {*}  {Promise<boolean>}
     * @memberof SupportTicketAggregate
     */
    async OpenNewTicket(ticketData: IOpenNewTicketCommand): Promise<boolean> {

        if (!this.supportTicketService) {
            throw new AggregateRootException('InvoiceAggregate: "SupportTicketService" is not defined!');
        }
        if (!this.newTicketAddedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "NewTicketAddedEventPublisherBase" is not defined!');
        }

        return await OpenNewTicket(ticketData, this.supportTicketService, this.newTicketAddedEventPublisherBase);
    }


    /**
     * Closes the given ticket
     *
     * @param {ICloseTicketCommand} ticketData
     * @return {*}  {Promise<boolean>}
     * @memberof SupportTicketAggregate
     */
    async CloseTicket(ticketData: ICloseTicketCommand): Promise<boolean> {

        if (!this.supportTicketService) {
            throw new AggregateRootException('InvoiceAggregate: "SupportTicketService" is not defined!');
        }
        if (!this.ticketClosedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "TicketClosedEventPublisherBase" is not defined!');
        }

        return await CloseTicket(ticketData, this.supportTicketService, this.ticketClosedEventPublisherBase);
    }


    /**
     * Generates a invoice corresponding to the support ticket
     *
     * @param {IGenerateInvoiceCommand} ticketData
     * @return {*}  {Promise<boolean>}
     * @memberof SupportTicketAggregate
     */
    async GenerateInvoice(ticketData: IGenerateInvoiceCommand): Promise<boolean> {

        if (!this.supportTicketService) {
            throw new AggregateRootException('InvoiceAggregate: "SupportTicketService" is not defined!');
        }
        if (!this.invoiceGeneratedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "InvoiceGeneratedEventPublisherBase" is not defined!');
        }

        return await GenerateInvoice(ticketData, this.supportTicketService, this.invoiceGeneratedEventPublisherBase);
    }

    // #endregion


    // #region DEVICE methods


    /**
     * Add a new Device
     *
     * @param {IAddDeviceCommand} deviceData
     * @return {*}  {Promise<boolean>}
     * @memberof SupportTicketAggregate
     */
    async AddDevice(deviceData: DeviceDomainEntityBase): Promise<IDeviceDomainEntity | null> {

        if (!this.deviceService) {
            throw new AggregateRootException('InvoiceAggregate: "DeviceService" is not defined!');
        }
        if (!this.deviceAddedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "InvoiceGeneratedEventPublisherBase" is not defined!');
        }

        return await AddDevice(deviceData, this.deviceService, this.deviceAddedEventPublisherBase);
    }

    /**
     * Add an Issue to the list of issues of the device
     *
     * @param {IAddIssueCommand} issue
     * @return {*}  {Promise<boolean>}
     * @memberof SupportTicketAggregate
     */
    async AddIssue(issue: IAddIssueCommand): Promise<boolean> {

        if (!this.deviceService) {
            throw new AggregateRootException('InvoiceAggregate: "DeviceService" is not defined!');
        }
        if (!this.issueAddedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "IssueAddedEventPublisherBase" is not defined!');
        }

        return await AddIssue(issue, this.deviceService, this.issueAddedEventPublisherBase);
    }

    /**
     * Removes an Issue from the list of Issues of the device
     *
     * @param {IRemoveIssueCommand} issue
     * @return {*}  {Promise<boolean>}
     * @memberof SupportTicketAggregate
     */
    async RemoveIssue(issue: IRemoveIssueCommand): Promise<boolean> {

        if (!this.deviceService) {
            throw new AggregateRootException('InvoiceAggregate: "DeviceService" is not defined!');
        }
        if (!this.issueRemovedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "IssueRemovedEventPublisherBase" is not defined!');
        }

        return await RemoveIssue(issue, this.deviceService, this.issueRemovedEventPublisherBase);
    }
    // #endregion


    // #region REPAIRS methods

    async AddRepair(repairData: IAddRepairsCommand): Promise<boolean> {

        if (!this.repairsService) {
            throw new AggregateRootException('InvoiceAggregate: "RepairsService" is not defined!');
        }
        if (!this.repairsAddedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "RepairsAddedEventPublisherBase" is not defined!');
        }

        return await AddRepair(repairData, this.repairsService, this.repairsAddedEventPublisherBase);
    }



    /**
     * Allows to change the repair work status ( true = active / false = finished )
     *
     * @param {IChangeWorkStatusCommand} repairData
     * @return {*}  {Promise<boolean>}
     * @memberof SupportTicketAggregate
     */
    async ChangeWorkStatus(repairData: IChangeWorkStatusCommand): Promise<boolean> {

        if (!this.repairsService) {
            throw new AggregateRootException('InvoiceAggregate: "RepairsService" is not defined!');
        }
        if (!this.workStatusChangedEventPublisherBase) {
            throw new AggregateRootException('InvoiceAggregate: "WorkStatusChangedEventPublisherBase" is not defined!');
        }

        return await ChangeWorkStatus(repairData, this.repairsService, this.workStatusChangedEventPublisherBase);
    }


    // #endregion

}
