import { IUpdatePhoneMethod } from "../interfaces/commands/compra/cliente/updatePhone.command";
import { ClienteDomainEntity, CursoDomainEntity } from "../entities";
import { CompraDomainEntity } from "../entities/compra/compra.domain-entity";
import { ICreateClienteMethod } from "../interfaces/commands/compra/createCliente.command";
import { ICreateCompraMethod } from "../interfaces/commands/compra/createCompra.command";
import { ICreateCursoMethod } from "../interfaces/commands/compra/createCurso.command";
import { IUpdateClientPhoneMethod } from "../interfaces/commands/compra/updateClientePhone.command";
import { IUpdateCostoCursoPhoneMethod } from "../interfaces/commands/compra/updateCursoCosto.command";
import { IUpdatePorcentajeCuponMethod } from "../interfaces/commands/compra/updatePorcentajeCupon.command";
import { IUpdatePorcentajeMethod } from "../interfaces/commands/compra/cupon/updatePorcentaje.command";
import { IUpdateCostoMethod } from "../interfaces/commands/compra/curso/updateCosto.command";
import { IClienteService } from "../services/cliente.service";
import { ICompraService } from "../services/compra.service";
import { ICuponService } from "../services/cupon.service";
import { ICursoService } from "../services/curso.service";
import { UpdatePhoneEventPublisher } from "../events/publishers/compra/cliente/update-phone.event-publisher";
import { UpdatePorcentajeEventPublisher } from "../events/publishers/compra/cupon/update-porcentaje.event-publisher";
import { UpdateCostoCursoEventPublisher } from "../events/publishers/compra/curso/update-costo.event-publisher";
import { ClienteCreadoEventPublisher } from "../events/publishers/compra/cliente-creado.event-publisher";
import { CompraCreadaEventPublisher } from "../events/publishers/compra/compra-creada.event-publisher";
import { CursoCreadoEventPublisher } from "../events/publishers/compra/curso-creado.event-publisher";
import { AggregateRootException } from "src/libs/sofka/exceptions/aggregate-root.exception";
import { ClienteConseguidoEventPublisher } from "../events/publishers/compra/cliente/cliente-conseguido.event-publisher";
import { CuponConseguidoEventPublisher } from "../events/publishers/compra/cupon/cupon-conseguido.event-publisher";
import { CursoConseguidoEventPublisher } from "../events/publishers/compra/curso/curso-conseguido.event-publisher";
import { CreateClienteHelper } from "./helpers/create-cliente.helper";
import { EventPublisherBase } from "src/libs";


export class CompraAggregate implements IClienteService, ICompraService, ICuponService, ICursoService {

    //DECLARO PROPIEDADES DE CADA SERVICIO RELACIONADO A MI AGREGADO
    private readonly clienteService?: IClienteService;
    private readonly compraService?: ICompraService;
    private readonly cuponService?: ICuponService;
    private readonly cursoService?: ICursoService;


    //DECLARO PROPIEDADES DE LOS PUBLISHERS RELACIONADOS A MI AGREGADO
    private readonly updatePhoneEventPublisher?: UpdatePhoneEventPublisher;
    private readonly updatePorcentajeEventPublisher?: UpdatePorcentajeEventPublisher;
    private readonly updateCostoCursoEventPublisher?: UpdateCostoCursoEventPublisher;
    private readonly clienteCreadoEventPublisher?: ClienteCreadoEventPublisher;
    private readonly compraCreadaEventPublisher?: CompraCreadaEventPublisher;
    private readonly cursoCreadoEventPublisher?: CursoCreadoEventPublisher;
    private readonly clienteConseguidoEventPublisher?: ClienteConseguidoEventPublisher;
    private readonly cursoConseguidoEventPublisher?: CursoConseguidoEventPublisher;


    constructor({

        //Constructor recibe objetos
        clienteService,
        compraService,
        cuponService,
        cursoService,
        

        updatePhoneEventPublisher,
        updatePorcentajeEventPublisher,
        updateCostoCursoEventPublisher,
        clienteCreadoEventPublisher,
        compraCreadaEventPublisher,
        cursoCreadoEventPublisher,
        clienteConseguidoEventPublisher,
        cursoConseguidoEventPublisher

    }: {
   
        clienteService?: IClienteService;
        compraService?: ICompraService;
        cuponService?: ICuponService;
        cursoService?: ICursoService;

       

        updatePhoneEventPublisher?: UpdatePhoneEventPublisher;
        updatePorcentajeEventPublisher?: UpdatePorcentajeEventPublisher;
        updateCostoCursoEventPublisher?: UpdateCostoCursoEventPublisher;
        clienteCreadoEventPublisher?: ClienteCreadoEventPublisher;
        compraCreadaEventPublisher?: CompraCreadaEventPublisher;
        cursoCreadoEventPublisher?: CursoCreadoEventPublisher;
        clienteConseguidoEventPublisher?: ClienteConseguidoEventPublisher;
        cursoConseguidoEventPublisher?: CursoConseguidoEventPublisher;

    }) {

        this.clienteService = clienteService;
        this.compraService = compraService;
        this.cuponService = cuponService;
        this.cursoService = cursoService;

        this.updatePhoneEventPublisher = updatePhoneEventPublisher;
        this.updatePorcentajeEventPublisher = updatePorcentajeEventPublisher;
        this.updateCostoCursoEventPublisher = updateCostoCursoEventPublisher;
        this.clienteCreadoEventPublisher = clienteCreadoEventPublisher;
        this.compraCreadaEventPublisher = compraCreadaEventPublisher;
        this.cursoCreadoEventPublisher = cursoCreadoEventPublisher;
        this.clienteConseguidoEventPublisher = clienteConseguidoEventPublisher;
        this.cursoConseguidoEventPublisher = cursoConseguidoEventPublisher;

    

    }
 
    /*
    //IMPLEMENTO LAS INTERFACES QUE MANEJAN LOS METODOS DE MI AGREGADO
    async createCliente(cliente: ICreateClienteMethod): Promise<ClienteDomainEntity> {
        if (this.compraService && this.clienteCreadoEventPublisher) {
            const result = await this.compraService.createCliente(cliente);
            this.clienteCreadoEventPublisher.response = result;
            this.clienteCreadoEventPublisher.publish();
            return this.clienteCreadoEventPublisher.response;
          }
          throw new AggregateRootException(
            'Faltan definir datos',
          );
    }
    */

    
    createCliente(cliente: ICreateClienteMethod): Promise<ClienteDomainEntity> {
       return CreateClienteHelper(cliente as ClienteDomainEntity, this.compraService, this.clienteCreadoEventPublisher)
    }
    





    async createCompra(compra: ICreateCompraMethod): Promise<CompraDomainEntity> {
        if (this.compraService && this.compraCreadaEventPublisher) {
            const result = await this.compraService.createCompra(compra);
            this.compraCreadaEventPublisher.response = result;
            this.compraCreadaEventPublisher.publish();
            return this.compraCreadaEventPublisher.response;
          }
          throw new AggregateRootException(
            'Faltan definir datos',
          );
    }

    async createCurso(curso: ICreateCursoMethod): Promise<CursoDomainEntity> {
        if (this.compraService && this.cursoCreadoEventPublisher) {
            const result = await this.compraService.createCurso(curso);
            this.cursoCreadoEventPublisher.response = result;
            this.cursoCreadoEventPublisher.publish();
            return this.cursoCreadoEventPublisher.response;
          }
          throw new AggregateRootException(
            'Faltan definir datos',
          );
    }

    async updatePorcentaje(data: IUpdatePorcentajeMethod): Promise<number> {
        if (this.cuponService && this.updatePorcentajeEventPublisher) {
            const result = await this.cuponService.updatePorcentaje(data);
            this.updatePorcentajeEventPublisher.response = result;
            this.updatePorcentajeEventPublisher.publish();
            return this.updatePorcentajeEventPublisher.response;
          }
          throw new AggregateRootException(
            'Faltan definir datos',
          );
    }

    async updateCosto(data: IUpdateCostoMethod): Promise<CursoDomainEntity> {
        if (this.cursoService && this.updateCostoCursoEventPublisher) {
            const result = await this.cursoService.updateCosto(data);
            this.updateCostoCursoEventPublisher.response = result;
            this.updateCostoCursoEventPublisher.publish();
            return this.updateCostoCursoEventPublisher.response;
          }
          throw new AggregateRootException(
            'Faltan definir datos',
          );
    }

    async updatePhone(data: IUpdatePhoneMethod ): Promise<ClienteDomainEntity > {

        if (this.clienteService && this.updatePhoneEventPublisher) {
            const result = await this.clienteService.updatePhone(data);
            this.updatePhoneEventPublisher.response = result;
            this.updatePhoneEventPublisher.publish();
            return this.updatePhoneEventPublisher.response;
          }
          throw new AggregateRootException(
            'Faltan definir datos',
          );
    }
    

    //METODOS PARA OBTENER LAS ENTIDADES 
    async obtenerCliente(client: string): Promise<ClienteDomainEntity> {
      
      if (this.compraService && this.clienteConseguidoEventPublisher) {
        const result = await this.compraService.obtenerCliente(client);
        this.clienteConseguidoEventPublisher.response = result;
        this.clienteConseguidoEventPublisher.publish();
        return this.clienteConseguidoEventPublisher.response;
      }
      throw new AggregateRootException(
        'Faltan definir datos',
      );
    }

    async obtnerCurso(course: string): Promise<CursoDomainEntity> {
      if (this.compraService && this.cursoConseguidoEventPublisher) {
        const result = await this.compraService.obtnerCurso(course);
        this.cursoConseguidoEventPublisher.response = result;
        this.cursoConseguidoEventPublisher.publish();
        return this.cursoConseguidoEventPublisher.response;
      }
      throw new AggregateRootException(
        'Faltan definir datos',
      );
    }

}
