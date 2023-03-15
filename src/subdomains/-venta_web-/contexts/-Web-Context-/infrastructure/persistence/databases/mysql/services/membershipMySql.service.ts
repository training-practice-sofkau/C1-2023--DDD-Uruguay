import { Injectable } from "@nestjs/common";
import { MembershipRepository } from "../repositories";
import { IMembershipService} from "src/subdomains/-venta_web-/contexts/-Web-Context-/domain";
import {  MembershipMySqlEntity } from "../entities";



@Injectable()
export class MembershipMySqlService implements IMembershipService<MembershipMySqlEntity> {


    constructor(private readonly membershipRepository: MembershipRepository) {
    }

     //METODOS

    createMembership(membership: MembershipMySqlEntity): Promise<MembershipMySqlEntity> {
        return this.membershipRepository.create(membership)
    }
    

}