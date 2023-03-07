export interface IGuestDomainService {
    updatePhone(guestId: string, newPhone: string): Promise<string>;
    updateEmail(guestId: string, newEmail: string): Promise<string>;
}