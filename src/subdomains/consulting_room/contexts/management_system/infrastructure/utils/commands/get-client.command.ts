import { IsUUID } from "class-validator";
import { IGetClientCommand } from "../../../domain/interfaces/commands/get-client.command";

export class GetClientCommand implements IGetClientCommand {
    @IsUUID()
    clientId: string;
} 