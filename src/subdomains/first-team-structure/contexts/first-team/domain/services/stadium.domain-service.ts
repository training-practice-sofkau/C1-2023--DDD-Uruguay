import { CapacityValueObject, SquareMetersValueObject } from "../value-objects";
import { StadiumDomainEntity } from '../entities/match/stadium.domain-entity';
import { IUpdateStadiumCapacity, IUpdateStadiumSquareMeters } from "../interfaces";

export interface IStadiumDomainService {
    updateCapacity(capacity: IUpdateStadiumCapacity): Promise<StadiumDomainEntity | null>;
    updateSquareMeters(squareMeters: IUpdateStadiumSquareMeters): Promise<StadiumDomainEntity | null>;
}