
import { ICreateInvoiceCommand } from '../../../domain/interfaces/commands/invoice/';
import { IInvoiceCreatedResponse } from '../../../domain/interfaces/responses/invoice/';
import { ValueObjectErrorHandler, IUseCase } from '../../../../../../../libs/sofka';

import { InvoiceAggregate } from '../../../domain/aggregates/invoice';
import { IInvoiceDomainService } from '../../../domain/services/invoice';
import { InvoiceCreatedEventPublisherBase } from '../../../domain/events/publishers/invoice';
import { InvoiceDomainEntityBase } from '../../../domain/entities/invoice/invoice.domain-entity';

export class CreateInvoiceUseCase<
    Command extends ICreateInvoiceCommand = ICreateInvoiceCommand,
    Response extends IInvoiceCreatedResponse = IInvoiceCreatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>{

    private readonly invoiceAggregateRoot: InvoiceAggregate;

    constructor(
        private readonly invoiceService: IInvoiceDomainService,
        private readonly invoiceCreatedEventPublisherBase: InvoiceCreatedEventPublisherBase,

    ) {
        super();
        this.invoiceAggregateRoot = new InvoiceAggregate({
            invoiceService,
            invoiceCreatedEventPublisherBase
        })        
    }

    async execute(command?: Command): Promise<Response> {

        const data = await  this.executeCommand(command);

        return { success: data ? true : false , data} as unknown as Response;
    }


    private async executeCommand( command: Command ) : Promise< InvoiceDomainEntityBase | null >{

        const VO = this.createValueObject(command);
        this.validateValueObject(VO);
        const entity = this.createEntityInvoiceDomain(VO);

        return this.executeCreateInvoiceAggregateRoot(entity);

    }


    createEntityInvoiceDomain(VO: void) {
        throw new Error('Method not implemented.');

        //TODO: implementar metodo
    }


    validateValueObject(VO: void) {
        throw new Error('Method not implemented.');

        //TODO: implementar metodo
    }


    createValueObject<Command extends ICreateInvoiceCommand>(command: Command) {
        throw new Error('Method not implemented.');

        //TODO: implementar metodo
    }


    private executeCreateInvoiceAggregateRoot( 
        entity: any,        
    ) : Promise <any | null>{
        return this.invoiceAggregateRoot.createInvoice(entity);
    }

}