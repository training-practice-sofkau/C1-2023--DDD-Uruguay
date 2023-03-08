import { ReserveDomainEntity } from "../../../../entities";
import { ReserveCreatedEventPublisher } from "../../../../events";
import { ICreateReserve } from "../../../../interfaces";
import { IReserveDomainService } from "../../../../services";

export const CreateReserve = async (
    reserve: ICreateReserve,
    reserveService: IReserveDomainService,
    reserveCreatedEventPublisher: ReserveCreatedEventPublisher
): Promise<ReserveDomainEntity | null> => {
    const result = await reserveService.createReserve(reserve);
    reserveCreatedEventPublisher.response = result;
    reserveCreatedEventPublisher.publish();
    return result;
}
