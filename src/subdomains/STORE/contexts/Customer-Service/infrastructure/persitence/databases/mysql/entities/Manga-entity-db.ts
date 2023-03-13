import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne } from 'typeorm';
import { MangaDomainBase } from '../../../../../domain/entities/Order-domain/manga-domain-entity';
import { OrderDomainEntityBase } from '../../../../../domain/entities/Order-domain/Order-domain-entity';

@Entity()
export class MangaEntityDb extends MangaDomainBase{
  @PrimaryGeneratedColumn('uuid') 
   Mangaid: string;

  @Column()
  Name: string;

  @Column()
  state: string;

  @Column()
  Price: number;

  @Column()
  Stock: number;

  @ManyToOne(() => OrderDomainEntityBase, order => order.Manga)
  order: OrderDomainEntityBase;
}
