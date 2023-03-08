import { IUpdateEmail, IUpdatePhone } from "../interfaces";

export interface IGuestDomainService {
    updatePhone(data: IUpdatePhone): Promise<string>;
    updateEmail(data: IUpdateEmail): Promise<string>;
}