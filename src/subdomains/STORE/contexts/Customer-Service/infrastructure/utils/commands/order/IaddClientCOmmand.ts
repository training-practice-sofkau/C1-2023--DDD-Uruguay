import { IsString, IsUUID } from "class-validator";
import { IAddClient } from "../../../../domain/interfaces/commands/Order-commands";

export class IaddClientCOmmand implements IAddClient {
    @IsUUID()
    ClientID: string;
    @IsString()
    Name: string;
    @IsString()
    Phone: number;
}
