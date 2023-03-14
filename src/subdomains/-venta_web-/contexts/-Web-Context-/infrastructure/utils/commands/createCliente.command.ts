import { ICreateClienteMethod } from "../../../domain";
import { IsString } from 'class-validator';

export class ICreateClienteCommand implements ICreateClienteMethod{

    @IsString()
    idCliente?: string;

    @IsString()
    nombreCliente: string;

    @IsString()
    phoneCliente: string 

    @IsString()
    emailCliente: string;
             
}