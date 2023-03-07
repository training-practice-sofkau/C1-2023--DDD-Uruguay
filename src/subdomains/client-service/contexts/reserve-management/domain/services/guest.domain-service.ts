export interface IGuestDomainService {
    updatePhone(guestId: string, newPhone: number): Promise<number>;
    updateEmail(guestId: string, newEmail: string): Promise<string>;
}