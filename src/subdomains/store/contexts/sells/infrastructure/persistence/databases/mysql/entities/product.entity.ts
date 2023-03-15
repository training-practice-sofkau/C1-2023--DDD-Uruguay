
import { DessertType, Flavour, ProductDomainEntity } from "src/subdomains/store/contexts/sells";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { CounterMySqlEntity } from './counter.entity';



@Entity("product", { schema: "public" })
export class ProductMySqlEntity extends ProductDomainEntity {

    @PrimaryGeneratedColumn('uuid')
    productId: string

    @Column()
    type: DessertType

    @Column()
    flavour: Flavour

    @Column()
    price: number

    @Column()
    stock: number

    @Column()
    expirationDate: Date

    @OneToMany(() => CounterMySqlEntity, (counter) => counter.product)
    counter?: CounterMySqlEntity
}