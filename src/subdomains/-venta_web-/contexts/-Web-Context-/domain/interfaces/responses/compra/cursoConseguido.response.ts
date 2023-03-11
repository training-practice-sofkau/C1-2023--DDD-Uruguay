import {  CursoDomainEntity } from "../../../entities";


export interface ICursoConseguidoResponse {

    success: boolean;
    data: CursoDomainEntity | null;
    
}