import { UpdatePhoneClientCaseUse } from './../../application/use-cases/Order-Use-case/client-case-use/update-phone-client-case-use/update-phone-client-case-use';
import { Controller, Post, Body, Patch } from '@nestjs/common';
import { UpdateNameClientCaseUse } from '../../application';
import { IAddClient, UpdateNameClient } from '../../domain/interfaces/commands';
import {
  INameModifiedEventPublisher,
  IOrderAddEventPublisher,
  IPhoneModifiedEventPublisher,
} from '../messaging/publisher/order';
import { ClientService } from '../persitence/services/OrderServices/ClientService';

@Controller('Client')
export class ClientController {
  constructor(
    private readonly ClientService: ClientService,
    private readonly NameModifiedEventPublisher: INameModifiedEventPublisher,
    private readonly IPhoneModifiedEventPublisher: IPhoneModifiedEventPublisher,

    private readonly registerOrderEventPublisher: IOrderAddEventPublisher,
  ) {}

  @Patch('update-client-name')
    updateClient(@Body()  command: UpdateNameClient) {
        const useCase = new  UpdateNameClientCaseUse(this.ClientService,  this.NameModifiedEventPublisher)
         useCase.execute(command);
      }



      @Patch('update-client-phone')
      updateClientPhone(@Body()  command: UpdatePhone) {
          const useCase = new  UpdatePhoneClientCaseUse(this.ClientService,  this.IPhoneModifiedEventPublisher)
           useCase.execute(command);
        }   

  }
 
  






