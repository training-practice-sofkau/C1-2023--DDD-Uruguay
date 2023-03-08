import { CursoDomainEntity } from "../../../entities/compra/curso.domain-entity";

export interface IcursoCreadoResponse {
    success: boolean;
    data: CursoDomainEntity | null;
}