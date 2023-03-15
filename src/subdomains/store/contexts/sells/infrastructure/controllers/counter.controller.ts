import { Body, Controller, Post } from "@nestjs/common";
import { CreateCounterUseCase } from "../../application";
import { CreatedCounterPublisher } from "../messaging/publisher/counter/created-counter.message-publisher";
import { CounterService } from "../persistence/services";
import { CounterCreateCounterCommand } from "../utils/commands/counter/create-counter.command";

@Controller('counter')
export class CounterController {

    constructor(
        private readonly counterService: CounterService,
        private readonly createdCounterPublisher: CreatedCounterPublisher,

    ) { }

    @Post("/create-counter")
    async addCounter(@Body() command: CounterCreateCounterCommand) {
        const useCase = new CreateCounterUseCase(
            this.counterService,
            this.createdCounterPublisher
        )
        return await useCase.execute(command)
    }
}