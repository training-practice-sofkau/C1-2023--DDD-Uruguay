import { Column, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SellerDomain } from '../../../../../domain/entities/Sale-domain/seller-domain-entity';
import { saleEntityBd } from './Sale-entity';
export class SellerEntityDB  extends SellerDomain{

    @PrimaryGeneratedColumn('uuid')
    IdSeller: string 
    @Column()
    Name: string 


    @OneToOne(() => saleEntityBd, sale => sale.Seller)
    sale: saleEntityBd;
}
