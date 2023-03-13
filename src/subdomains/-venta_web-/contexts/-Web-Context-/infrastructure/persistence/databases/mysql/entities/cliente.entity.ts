import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"

import { ClienteDomainEntity } from "src/subdomains";
import { CompraMySqlEntity } from "./compra.entity";

@Entity()
export class ClienteMySqlEntity extends ClienteDomainEntity {
   
    @PrimaryGeneratedColumn('uuid')
    idCliente: string;

    @Column()
    nombreCliente: string;

    @Column()
    phoneCliente: string;

    @Column()
    emailCliente: string;

    //RELACIONES

    @OneToOne( ()=> CompraMySqlEntity, (compra)=> compra.cliente )
    compra: CompraMySqlEntity;
}