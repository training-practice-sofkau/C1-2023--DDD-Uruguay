import { BillDomain, SaleDomainEntity, SellerDomain } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";
import { BillEntityDB } from "./Bill-entity";
import { SellerEntityDB } from "./sellerEntityDb";

export class saleEntityBd extends SaleDomainEntity {


    @OneToOne(() => BillEntityDB, (Bill) => Bill.sale, {
        cascade: ['insert', 'update']
    })
    @JoinColumn()
    Bill?: BillEntityDB;


    @OneToOne(() => SellerEntityDB, (Seller) => Seller.sale, {
        cascade: ['insert', 'update']
    })
    @JoinColumn()
    Seller?: SellerDomain;

    @PrimaryGeneratedColumn('uuid')
    IDSale?: string

    @Column()
    IDOrder?: string

}