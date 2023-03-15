import { AggregateRootException } from "src/libs/sofka";
import {
    CheckOutDomainEntity,
    ConsumptionDomainEntity,
    InvoiceDomainEntity
} from "../entities";
import {
    CheckOutCreatedEventPublisher,
    ConsumptionAddedEventPublisher,
    InvoiceAddedEventPublisher,
    ExtraUpdatedEventPublisher,
    MiniBarUpdatedEventPublisher,
    CostUpdatedEventPublisher,
    ConsumptionObtainedEventPublisher,
    InvoiceObtainedEventPublisher
} from "../events";
import {
    IUpdateExtra,
    IUpdateMiniBar,
    IUpdateCost,
    IAddConsumption,
    IAddInvoice,
} from "../interfaces";
import {
    ICheckOutDomainService,
    IConsumptionDomainService,
    IInvoiceDomainService
} from "../services";
import {
    AddConsumption,
    AddInvoice,
    CreateCheckOut,
    GetInvoice,
    UpdateCost,
    UpdateExtra,
    UpdateMiniBar,
    GetConsumption
} from "./helpers";

export class CheckOutAggregate implements
    ICheckOutDomainService,
    IInvoiceDomainService,
    IConsumptionDomainService {

    private readonly checkOutService?: ICheckOutDomainService
    private readonly invoiceService?: IInvoiceDomainService
    private readonly consumptionService?: IConsumptionDomainService

    private readonly checkOutCreatedEventPublisher?: CheckOutCreatedEventPublisher;
    private readonly consumptionAddedEventPublisher?: ConsumptionAddedEventPublisher;
    private readonly invoiceAddedEventPublisher?: InvoiceAddedEventPublisher;
    private readonly costUpdatedEventPublisher?: CostUpdatedEventPublisher;
    private readonly extraUpdatedEventPublisher?: ExtraUpdatedEventPublisher;
    private readonly miniBarUpdatedEventPublisher?: MiniBarUpdatedEventPublisher;
    private readonly consumptionObtainedEventPublisher?: ConsumptionObtainedEventPublisher;
    private readonly invoiceObtainedEventPublisher?: InvoiceObtainedEventPublisher;

    constructor(
        {
            checkOutService,
            invoiceService,
            consumptionService,

            checkOutCreatedEventPublisher,
            consumptionAddedEventPublisher,
            invoiceAddedEventPublisher,
            costUpdatedEventPublisher,
            extraUpdatedEventPublisher,
            miniBarUpdatedEventPublisher,
            consumptionObtainedEventPublisher,
            invoiceObtainedEventPublisher,
        }: {
            checkOutService?: ICheckOutDomainService,
            invoiceService?: IInvoiceDomainService,
            consumptionService?: IConsumptionDomainService,

            checkOutCreatedEventPublisher?: CheckOutCreatedEventPublisher,
            consumptionAddedEventPublisher?: ConsumptionAddedEventPublisher,
            invoiceAddedEventPublisher?: InvoiceAddedEventPublisher,
            costUpdatedEventPublisher?: CostUpdatedEventPublisher,
            extraUpdatedEventPublisher?: ExtraUpdatedEventPublisher,
            miniBarUpdatedEventPublisher?: MiniBarUpdatedEventPublisher,
            consumptionObtainedEventPublisher?: ConsumptionObtainedEventPublisher,
            invoiceObtainedEventPublisher?: InvoiceObtainedEventPublisher,
        }
    ) {
        this.checkOutService = checkOutService
        this.invoiceService = invoiceService
        this.consumptionService = consumptionService

        this.checkOutCreatedEventPublisher = checkOutCreatedEventPublisher
        this.consumptionAddedEventPublisher = consumptionAddedEventPublisher
        this.invoiceAddedEventPublisher = invoiceAddedEventPublisher
        this.costUpdatedEventPublisher = costUpdatedEventPublisher
        this.extraUpdatedEventPublisher = extraUpdatedEventPublisher
        this.miniBarUpdatedEventPublisher = miniBarUpdatedEventPublisher
        this.consumptionObtainedEventPublisher = consumptionObtainedEventPublisher
        this.invoiceObtainedEventPublisher = invoiceObtainedEventPublisher
    }


    async createCheckOut(checkOut: CheckOutDomainEntity): Promise<CheckOutDomainEntity> {
        if (!this.checkOutService)
            throw new AggregateRootException('checkOutService no esta definido')
        if (!this.checkOutCreatedEventPublisher)
            throw new AggregateRootException('checkOutCreatedEventPublisher no esta definido')

        return await CreateCheckOut(checkOut, this.checkOutService, this.checkOutCreatedEventPublisher)
    }

    async addConsumption(consumption: IAddConsumption): Promise<ConsumptionDomainEntity> {
        if (!this.checkOutService)
            throw new AggregateRootException('checkOutService no esta definido')
        if (!this.consumptionAddedEventPublisher)
            throw new AggregateRootException('consumptionAddedEventPublisher no esta definido')

        return await AddConsumption(consumption, this.checkOutService, this.consumptionAddedEventPublisher)
    }

    async addInvoice(invoice: IAddInvoice): Promise<InvoiceDomainEntity> {
        if (!this.checkOutService)
            throw new AggregateRootException('checkOutService no esta definido')
        if (!this.invoiceAddedEventPublisher)
            throw new AggregateRootException('invoiceAddedEventPublisher no esta definido')

        return await AddInvoice(invoice, this.checkOutService, this.invoiceAddedEventPublisher)
    }

    async updateCost(data: IUpdateCost): Promise<InvoiceDomainEntity> {
        if (!this.invoiceService)
            throw new AggregateRootException('invoiceService no esta definido')
        if (!this.costUpdatedEventPublisher)
            throw new AggregateRootException('costUpdatedEventPublisher no esta definido')

        return await UpdateCost(data, this.invoiceService, this.costUpdatedEventPublisher)
    }

    async updateExtra(data: IUpdateExtra): Promise<ConsumptionDomainEntity> {
        if (!this.consumptionService)
            throw new AggregateRootException('consumptionService no esta definido')
        if (!this.extraUpdatedEventPublisher)
            throw new AggregateRootException('extraUpdatedEventPublisher no esta definido')

        return await UpdateExtra(data, this.consumptionService, this.extraUpdatedEventPublisher)
    }

    async updateMiniBar(data: IUpdateMiniBar): Promise<ConsumptionDomainEntity> {
        if (!this.consumptionService)
            throw new AggregateRootException('consumptionService no esta definido')
        if (!this.miniBarUpdatedEventPublisher)
            throw new AggregateRootException('miniBarUpdatedEventPublisher no esta definido')

        return await UpdateMiniBar(data, this.consumptionService, this.miniBarUpdatedEventPublisher)
    }

    async getConsumption(data: string): Promise<ConsumptionDomainEntity> {
        if (!this.checkOutService)
            throw new AggregateRootException('checkOutService no esta definido')
        if (!this.consumptionObtainedEventPublisher)
            throw new AggregateRootException('consumptionObtainedEventPublisher no esta definido')

        return await GetConsumption(data, this.checkOutService, this.consumptionObtainedEventPublisher)
    }

    async getInvoice(data: string): Promise<InvoiceDomainEntity> {
        if (!this.checkOutService)
            throw new AggregateRootException('checkOutService no esta definido')
        if (!this.invoiceObtainedEventPublisher)
            throw new AggregateRootException('invoiceObtainedEventPublisher no esta definido')

        return await GetInvoice(data, this.checkOutService, this.invoiceObtainedEventPublisher)
    }

}
