import { RoomDomainEntity } from "../../../../entities";
import { StateUpdatedEventPublisher } from "../../../../events";
import { IUpdateState } from "../../../../interfaces";
import { IRoomDomainService } from "../../../../services";

export const UpdateState = async (
    data: IUpdateState,
    roomService: IRoomDomainService,
    stateUpdatedEventPublisher: StateUpdatedEventPublisher
): Promise<RoomDomainEntity | null> => {
    const result = await roomService.updateState(data);
    stateUpdatedEventPublisher.response = result;
    stateUpdatedEventPublisher.publish();
    return result;
}
