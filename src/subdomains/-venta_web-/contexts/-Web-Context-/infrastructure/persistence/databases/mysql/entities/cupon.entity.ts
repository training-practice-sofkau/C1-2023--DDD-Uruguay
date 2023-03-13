import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"

import { ClienteDomainEntity, CuponDomainEntity } from "src/subdomains";
import { CompraMySqlEntity } from "./compra.entity";

@Entity()
export class CuponMySqlEntity extends CuponDomainEntity {

    @PrimaryGeneratedColumn('uuid')
    idCupon: string;

    @Column()
    dateCreateCupon: number;

    @Column()
    porcentajeCupon: number;

    //RELACIONES

    @OneToOne( ()=> CompraMySqlEntity, (compra)=> compra.cupon )
    compra: CompraMySqlEntity;
}