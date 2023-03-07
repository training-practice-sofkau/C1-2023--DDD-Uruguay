import { ClienteDomainEntity } from "../../../entities/common-entities/cliente.domain-entity";

export interface IClienteCreadoResponse {
    success: boolean;
    data: ClienteDomainEntity | null;
}