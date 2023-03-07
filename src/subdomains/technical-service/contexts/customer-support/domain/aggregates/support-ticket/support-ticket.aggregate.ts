
import { AggregateRootException } from 'src/libs/sofka/exceptions';

import { NewTicketAddedEventPublisherBase } from '../../events/publishers/support-ticket';
import { IssueAddedEventPublisherBase } from '../../events/publishers/support-ticket/device/issue-added.event-publisher';
import { IssueRemovedEventPublisherBase } from '../../events/publishers/support-ticket/device/issue-removed.event-publisher';


import {
    IOpenNewTicketCommand,
    ICloseTicketCommand,
    IGenerateInvoiceCommand,
    IAddDeviceCommand,
    IAddIssueCommand,
    IRemoveIssueCommand,

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

} from './helpers';

import {
    TicketClosedEventPublisherBase,
    InvoiceGeneratedEventPublisherBase,
    DeviceAddedEventPublisherBase,

} from '../../events/publishers/support-ticket';



export class SupportTicketAggregate implements ISupportTicketDomainService, IDeviceDomainService {

    private readonly supportTicketService?: ISupportTicketDomainService;
    private readonly deviceService?: IDeviceDomainService;
    private readonly repairsService?: IRepairsDomainService;
    private readonly newTicketAddedEventPublisherBase?: NewTicketAddedEventPublisherBase;
    private readonly ticketClosedEventPublisherBase?: TicketClosedEventPublisherBase;
    private readonly invoiceGeneratedEventPublisherBase?: InvoiceGeneratedEventPublisherBase;
    private readonly deviceAddedEventPublisherBase?: DeviceAddedEventPublisherBase;
    private readonly issueAddedEventPublisherBase?: IssueAddedEventPublisherBase;
    private readonly issueRemovedEventPublisherBase?: IssueRemovedEventPublisherBase;

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
    async AddDevice(deviceData: IAddDeviceCommand): Promise<boolean> {

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
}
