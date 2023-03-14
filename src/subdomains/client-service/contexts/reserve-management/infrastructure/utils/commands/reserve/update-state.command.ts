import { IsBoolean, IsUUID } from "class-validator";
import { IUpdateState } from "../../../domain";

export class IUpdateStateCommand implements IUpdateState{

    @IsUUID()
    roomId?: string;

    @IsBoolean()
    state?: boolean;
}