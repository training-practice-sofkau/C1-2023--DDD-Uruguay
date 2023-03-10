import { StadiumDomainEntity } from '../entities/match/stadium.domain-entity';
import { IUpdateStadiumCapacity, IUpdateStadiumSquareMeters } from "../interfaces";

export interface IStadiumDomainService {
    getStadium(id: string): Promise<StadiumDomainEntity | null>;
    updateStadiumCapacity(capacity: IUpdateStadiumCapacity): Promise<StadiumDomainEntity | null>;
    updateStadiumSquareMeters(squareMeters: IUpdateStadiumSquareMeters): Promise<StadiumDomainEntity | null>;
}