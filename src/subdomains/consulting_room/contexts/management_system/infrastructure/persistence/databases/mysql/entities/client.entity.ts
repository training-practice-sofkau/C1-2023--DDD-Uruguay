import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ClientDomainEntitybase } from '../../../../../domain/entities/client.domain-entity';
import { OrderMySqlEntity } from './order.entity';

@Entity('client', { schema: 'public' })
export class ClientMySqlEntity extends ClientDomainEntitybase {
  @PrimaryGeneratedColumn('uuid')
  clientId?: string;

  @Column()
  fullName: string;

  @Column()
  phone: string;

  @OneToOne(() => OrderMySqlEntity, (order) => order.client)
  order: OrderMySqlEntity;
}