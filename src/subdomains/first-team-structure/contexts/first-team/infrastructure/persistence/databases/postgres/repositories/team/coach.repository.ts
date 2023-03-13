import { NotFoundException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CoachPostgreEntity } from "../../entities/team/coach.entity";
import { IBase } from "../base/base.interface";

export class CoachRepository implements IBase<CoachPostgreEntity> {

    constructor(
        @InjectRepository(CoachPostgreEntity)
        private coachRepository: Repository<CoachPostgreEntity>
    ) {}
    async create(entity: CoachPostgreEntity): Promise<CoachPostgreEntity> {
        return this.coachRepository.save(entity);
    }
    async update(id: string, entity: CoachPostgreEntity): Promise<CoachPostgreEntity> {
        const dbEntity = await this.coachRepository.findOneBy({coachId: id});

        if(dbEntity) {
            const newEntity = {
                ...dbEntity,
                ...entity,
                coachId: id
            }
            return this.coachRepository.save(newEntity)
        };

        throw new Error('Entity not found')

    }
    async find(): Promise<CoachPostgreEntity[]> {
        return this.coachRepository.find()
    }
    async findOne(id: string): Promise<CoachPostgreEntity> {
        const entity = await this.coachRepository.findOneBy({coachId: id});

        if(entity) return entity;

        throw new NotFoundException('Entity Not Found');
    }

}