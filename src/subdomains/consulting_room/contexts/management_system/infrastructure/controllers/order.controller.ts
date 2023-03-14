import { Body, Controller, Get, Post, Param } from '@nestjs/common';

import { AddClientUseCase } from '../../application';
import { ClientService } from '../persistence';

import { AddClientCommand } from '../utils/commands/add-client.command';
import { CreatedClientPublisher } from '../messaging/publisher/created-client.publisher';

@Controller('order')
export class OrderController {
    constructor(
        private readonly clientService: ClientService,
        private readonly registeredClientEventPublisherBase: CreatedClientPublisher,
    ) {}

    @Post('/add-client')
    async addClient(@Body() command: AddClientCommand) {
        const useCase = new AddClientUseCase(
            this.clientService,
            this.registeredClientEventPublisherBase,
        );
        return await useCase.execute(command);
    }

  
}
