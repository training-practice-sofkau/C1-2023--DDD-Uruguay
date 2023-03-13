import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { ClientEntityDB } from './Client-entity-db';
import { MangaEntityDb } from './Manga-entity-db';
import { OrderDomainEntityBase } from '../../../../../domain/entities/Order-domain/Order-domain-entity';


@Entity()
export class OrderEntityDb extends OrderDomainEntityBase {
  @PrimaryGeneratedColumn('uuid')
    orderId: string;

 
  @OneToOne(() => ClientEntityDB, (client) => client.order, {
    cascade: ['insert', 'update']
  })
  @JoinColumn()
  client: ClientEntityDB;
  

  @ManyToOne(() => MangaEntityDb, (manga) => manga.order,{
    cascade: ['insert', 'update']
  })
  @JoinColumn()
  manga: MangaEntityDb;
}