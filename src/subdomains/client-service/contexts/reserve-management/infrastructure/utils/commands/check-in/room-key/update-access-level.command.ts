import { IsString, IsUUID } from "class-validator";
import { IUpdateAccessLevel } from "../../../../../domain";

export class IUpdateAccessLevelCommand implements IUpdateAccessLevel {

    @IsUUID()
    roomKeyId?: string;

    @IsString()
    accessLevel?: string;
}