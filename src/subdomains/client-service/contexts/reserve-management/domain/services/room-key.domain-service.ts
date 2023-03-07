export interface IRoomKeyDomainService {
    updateAccessLevel(roomKeyId: string, newAccessLevel: string): Promise<string>
}