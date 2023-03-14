import { IAddClientCommand } from "../../../domain";
import { IsString } from 'class-validator';

export class AddClientCommand implements IAddClientCommand {
    @IsString()
    clientId?: string;

    @IsString()
    fullName?: string;

    @IsString()
    phone?: string;
}