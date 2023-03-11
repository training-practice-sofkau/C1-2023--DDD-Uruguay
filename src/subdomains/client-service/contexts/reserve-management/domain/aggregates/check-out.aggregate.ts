import { AggregateRootException } from "src/libs/sofka";
import {
    CheckOutDomainEntity,
    ConsumptionDomainEntity,
    InvoiceDomainEntity
} from "../entities";
import {
    CheckOutCreatedEventPublisher,
    ConsumptionAddedEventPublisher,
    ConsumptionExtraUpdatedEventPublisher,
    ConsumptionMiniBarUpdatedEventPublisher,
    InvoiceAddedEventPublisher,
    InvoiceCostUpdatedEventPublisher,
    ExtraUpdatedEventPublisher,
    MiniBarUpdatedEventPublisher,
    CostUpdatedEventPublisher
} from "../events";
import {
    IUpdateExtra,
    IUpdateMiniBar,
    IUpdateCost,
    ICreateCheckOut,
    IAddConsumption,
    IAddInvoice,
    IUpdateInvoiceCost,
    IUpdateConsumptionExtra,
    IUpdateConsumptionMiniBar
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
    UpdateConsumptionExtra,
    UpdateConsumptionMiniBar,
    UpdateCost,
    UpdateExtra,
    UpdateInvoiceCost,
    UpdateMiniBar
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
    private readonly consumptionExtraUpdatedEventPublisher?: ConsumptionExtraUpdatedEventPublisher;
    private readonly consumptionMiniBarUpdatedEventPublisher?: ConsumptionMiniBarUpdatedEventPublisher;
    private readonly invoiceAddedEventPublisher?: InvoiceAddedEventPublisher;
    private readonly invoiceCostUpdatedEventPublisher?: InvoiceCostUpdatedEventPublisher;
    private readonly costUpdatedEventPublisher?: CostUpdatedEventPublisher;
    private readonly extraUpdatedEventPublisher?: ExtraUpdatedEventPublisher;
    private readonly miniBarUpdatedEventPublisher?: MiniBarUpdatedEventPublisher;

    constructor(
        {
            checkOutService,
            invoiceService,
            consumptionService,

            checkOutCreatedEventPublisher,
            consumptionAddedEventPublisher,
            consumptionExtraUpdatedEventPublisher,
            consumptionMiniBarUpdatedEventPublisher,
            invoiceAddedEventPublisher,
            invoiceCostUpdatedEventPublisher,
            costUpdatedEventPublisher,
            extraUpdatedEventPublisher,
            miniBarUpdatedEventPublisher,
        }: {
            checkOutService?: ICheckOutDomainService,
            invoiceService?: IInvoiceDomainService,
            consumptionService?: IConsumptionDomainService,

            checkOutCreatedEventPublisher?: CheckOutCreatedEventPublisher,
            consumptionAddedEventPublisher?: ConsumptionAddedEventPublisher,
            consumptionExtraUpdatedEventPublisher?: ConsumptionExtraUpdatedEventPublisher,
            consumptionMiniBarUpdatedEventPublisher?: ConsumptionMiniBarUpdatedEventPublisher,
            invoiceAddedEventPublisher?: InvoiceAddedEventPublisher,
            invoiceCostUpdatedEventPublisher?: InvoiceCostUpdatedEventPublisher,
            costUpdatedEventPublisher?: CostUpdatedEventPublisher,
            extraUpdatedEventPublisher?: ExtraUpdatedEventPublisher,
            miniBarUpdatedEventPublisher?: MiniBarUpdatedEventPublisher
        }
    ) {
        this.checkOutService = checkOutService
        this.invoiceService = invoiceService
        this.consumptionService = consumptionService

        this.checkOutCreatedEventPublisher = checkOutCreatedEventPublisher
        this.consumptionAddedEventPublisher = consumptionAddedEventPublisher
        this.consumptionExtraUpdatedEventPublisher = consumptionExtraUpdatedEventPublisher
        this.consumptionMiniBarUpdatedEventPublisher = consumptionMiniBarUpdatedEventPublisher
        this.invoiceAddedEventPublisher = invoiceAddedEventPublisher
        this.invoiceCostUpdatedEventPublisher = invoiceCostUpdatedEventPublisher
        this.costUpdatedEventPublisher = costUpdatedEventPublisher
        this.extraUpdatedEventPublisher = extraUpdatedEventPublisher
        this.miniBarUpdatedEventPublisher = miniBarUpdatedEventPublisher
    }


    async createCheckOut(checkOut: ICreateCheckOut): Promise<CheckOutDomainEntity> {
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

    async updateInvoiceCost(data: IUpdateInvoiceCost): Promise<number> {
        if (!this.checkOutService)
            throw new AggregateRootException('checkOutService no esta definido')
        if (!this.invoiceCostUpdatedEventPublisher)
            throw new AggregateRootException('invoiceCostUpdatedEventPublisher no esta definido')

        return await UpdateInvoiceCost(data, this.checkOutService, this.invoiceCostUpdatedEventPublisher)
    }

    async updateConsumptionExtra(data: IUpdateConsumptionExtra): Promise<number> {
        if (!this.checkOutService)
            throw new AggregateRootException('checkOutService no esta definido')
        if (!this.consumptionExtraUpdatedEventPublisher)
            throw new AggregateRootException('consumptionExtraUpdatedEventPublisher no esta definido')

        return await UpdateConsumptionExtra(data, this.checkOutService, this.consumptionExtraUpdatedEventPublisher)
    }

    async updateConsumptionMiniBar(data: IUpdateConsumptionMiniBar): Promise<number> {
        if (!this.checkOutService)
            throw new AggregateRootException('checkOutService no esta definido')
        if (!this.consumptionMiniBarUpdatedEventPublisher)
            throw new AggregateRootException('consumptionMiniBarUpdatedEventPublisher no esta definido')

        return await UpdateConsumptionMiniBar(data, this.checkOutService, this.consumptionMiniBarUpdatedEventPublisher)
    }



    async updateCost(data: IUpdateCost): Promise<number> {
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

}
