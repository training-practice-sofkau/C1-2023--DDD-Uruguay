import { Body, Controller, Post } from '@nestjs/common';
import { AddRivalUseCase } from '../../application/use-cases/match/add-rival.use-cases';
import { RivalDomainEntity, IAddRivalCommand } from '../../domain';

@Controller('match')
export class MatchController {
      

    constructor(
        private readonly addRivalUseCase: AddRivalUseCase,
    ) {}
    @Post('add-rival')
    async addRival(@Body() rival: IAddRivalCommand): Promise<RivalDomainEntity> {
        return (await this.addRivalUseCase.execute(rival)).data
    }
}