import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"


import { ClienteMySqlEntity } from "./cliente.entity";
import { CursoMySqlEntity } from "./curso.entity";
import { CuponMySqlEntity } from "./cupon.entity";
import { CompraDomainEntity } from "src/subdomains/-venta_web-/contexts/-Web-Context-/domain";

@Entity()
export class CompraMySqlEntity extends CompraDomainEntity {

    @PrimaryGeneratedColumn('uuid')
    idCompra: string;

    

    //RELACIONES

    @JoinColumn()
    @OneToOne( ()=> ClienteMySqlEntity, (cliente)=> cliente.Compra, {cascade:["insert", "update"]} )
    cliente: ClienteMySqlEntity;
    
    @JoinColumn()
    @OneToOne( ()=> CursoMySqlEntity, (curso)=> curso.compra , {cascade:["insert", "update"]} )
    curso: CursoMySqlEntity;

    @JoinColumn()
    @OneToOne( ()=> CuponMySqlEntity, (cupon)=> cupon.compra , {cascade:["insert", "update"]})
    cupon: CuponMySqlEntity;
}

/*
  @JoinColumn()
    clienteCompra: ClienteMySqlEntity;

    @JoinColumn()
    cursoCompra: CursoMySqlEntity;

    @JoinColumn()
    cuponCompra: CuponMySqlEntity;
*/