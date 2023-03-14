import { Injectable } from '@nestjs/common';
import { CoachRepository } from '../../repositories/team/coach.repository';
import { CoachPostgreEntity } from '../../entities/team/coach.entity';
import { CoachDomainEntity, ICoachDomainService, IUpdateCoachWageCommand } from 'src/subdomains/first-team-structure/contexts/first-team/domain';
@Injectable()
export class CoachPostgreService implements ICoachDomainService{

    constructor(private readonly coachRepository: CoachRepository) {}
    getCoach(id: string): Promise<CoachDomainEntity> {
        return this.coachRepository.findOne(id);
    }
    updateCoachWage(command: IUpdateCoachWageCommand): Promise<CoachDomainEntity> {
        let newEntity: CoachPostgreEntity;

        this.coachRepository.findOne(command.coachId)
        .then(iEntity => newEntity = iEntity)
        .catch(() => new Error('Entity Not Found'));

        newEntity.wage = command.wage.valueOf();

        return this.coachRepository.update(command.coachId, newEntity);
    }
}