import { CompraDomainEntity } from "../../../entities/compra/compra.domain-entity";

export interface ICompraCreadaResponse {
    success: boolean;
    data: CompraDomainEntity | null;
}