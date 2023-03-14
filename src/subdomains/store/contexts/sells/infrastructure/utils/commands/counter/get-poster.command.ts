import { IsString } from "class-validator";
import { IGetPosterCommand } from "src/subdomains/store/contexts";

export class GetPosterCommand implements IGetPosterCommand {
    @IsString()
    posterId: string
}