import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"

import { ClienteDomainEntity, CompraDomainEntity, CuponDomainEntity } from "src/subdomains";
import { ClienteMySqlEntity } from "./cliente.entity";
import { CursoMySqlEntity } from "./curso.entity";
import { CuponMySqlEntity } from "./cupon.entity";

@Entity()
export class CompraMySqlEntity extends CompraDomainEntity {

    @PrimaryGeneratedColumn('uuid')
    idCompra: string;

    @JoinColumn()
    clienteCompra: ClienteMySqlEntity;

    @JoinColumn()
    cursoCompra: CursoMySqlEntity;

    @JoinColumn()
    cuponCompra: CuponMySqlEntity;

    //RELACIONES

    @OneToOne( ()=> ClienteMySqlEntity, (cliente)=> cliente.compra )
    cliente: ClienteMySqlEntity;

    @OneToOne( ()=> CursoMySqlEntity, (curso)=> curso.compra )
    curso: CursoMySqlEntity;

    @OneToOne( ()=> CuponMySqlEntity, (cupon)=> cupon.compra )
    cupon: CuponMySqlEntity;
}