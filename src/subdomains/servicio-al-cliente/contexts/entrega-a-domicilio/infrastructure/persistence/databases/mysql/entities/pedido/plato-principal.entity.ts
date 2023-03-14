import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { PedidoMySqlEntity } from ".";

import { PlatoPrincipalDomainEntityBase } from '../../../../../../domain/entities';

@Entity()
export class PlatoPrincipalMySqlEntity extends PlatoPrincipalDomainEntityBase {
    @PrimaryGeneratedColumn('uuid')
    platoPrincipalId: string;

    @Column()
    nombre: string;

    @Column()
    guarnicion: string;

    @Column()
    createdAt: Date | number;

    @OneToOne( ()=> PedidoMySqlEntity, (pedido)=> pedido.platoPrincipal )
    pedido: PedidoMySqlEntity;
}