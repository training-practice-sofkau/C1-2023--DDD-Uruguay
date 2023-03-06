import { InvoiceDomainEntityBase } from '../entities/invoice.domain-entity';
import { IInvoiceDomainService } from '../services/invoice.domain-service';
import { AggregateRootException } from '../../../../../../libs/sofka/exceptions/aggregate-root.exception';
export class InvoiceAggregate implements IInvoiceDomainService{

    private readonly invoiceService?: IInvoiceDomainService;
    //private readonly invoiceCreatedEventPublisherBase? : 

    constructor(
        {
            invoiceService,

        }:{
            invoiceService?: IInvoiceDomainService,
        }
    ){
        this.invoiceService = invoiceService; 

    }



    async createInvoice(invoice: InvoiceDomainEntityBase): Promise<InvoiceDomainEntityBase> {
        if(this.invoiceService){

            const result = await this.invoiceService.createInvoice(invoice);
            
            //TODO: terminar de implementar este metodo ( invoice Aggregate )

        }
        throw new AggregateRootException(
            'InvoiceAggregate "InvoiceService" not defined!'
        );
    }



    CalculateServiceCharge(ticketID: InvoiceDomainEntityBase): Promise<InvoiceDomainEntityBase> {
        throw new Error('Method not implemented.');
    }

    
}