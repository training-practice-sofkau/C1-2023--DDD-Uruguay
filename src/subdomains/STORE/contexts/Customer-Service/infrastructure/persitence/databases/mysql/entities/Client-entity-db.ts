import { OrderDomainEntityBase } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { BaseEntity, Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, } from "typeorm";
import { ClientDomainBase } from '../../../../../domain/entities/Order-domain/client-domain-entity';

@Entity()

export class ClientEntityDB  extends ClientDomainBase{

    @PrimaryGeneratedColumn('uuid')
     ClientID: string;
  
    @Column()
    Name: string;
  
    @Column()
    Phone: number;


    @OneToOne(() => OrderDomainEntityBase, order => order.client)
    order: OrderDomainEntityBase;
    

}
