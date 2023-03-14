import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { PedidoMySqlEntity } from ".";

import { EntradaDomainEntityBase } from '../../../../../../domain/entities';

@Entity()
export class EntradaMySqlEntity extends EntradaDomainEntityBase {
    @PrimaryGeneratedColumn('uuid')
    entradaId: string;

    @Column()
    nombre: string;

    @Column()
    createdAt: Date | number;

    @OneToOne( ()=> PedidoMySqlEntity, (pedido)=> pedido.entrada )
    pedido: PedidoMySqlEntity;
}