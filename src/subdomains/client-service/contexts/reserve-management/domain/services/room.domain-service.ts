export interface IRoomDomainService{
    updateState(roomId: string, newState: boolean): Promise<boolean>
}