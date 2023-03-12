import {  PlanDomainEntity } from "../../../entities";


export interface IPlanConseguidoResponse {

    success: boolean;
    data: PlanDomainEntity | null;
    
}