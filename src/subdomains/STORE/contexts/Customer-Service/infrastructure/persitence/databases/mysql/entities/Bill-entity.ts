import { BillDomain } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { PrimaryGeneratedColumn, Column, OneToOne, Entity } from "typeorm";
import { saleEntityBd } from "./Sale-entity";

@Entity()


export class BillEntityDB  extends BillDomain{

    @PrimaryGeneratedColumn('uuid')
    IDBill?: string ;
  

    @Column()
    PaymentMethod?:string 
    
    @Column()
    PaymentAmount?: string ;

    @Column()
    Total?: number ;

    @Column()
    IdClinet?: string ;

    @Column()
    IdManga?: string ;


    
    @OneToOne(() => saleEntityBd, sale => sale.Bill)
    sale: saleEntityBd;
}
