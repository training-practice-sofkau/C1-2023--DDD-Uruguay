import { Flavour, ImgType, PosterDomainEntity } from "src";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { CounterMySqlEntity } from './counter.entity';



@Entity("poster", { schema: "public" })
export class PosterMySqlEntity extends PosterDomainEntity {

    @PrimaryGeneratedColumn('uuid')
    posterId: string

    @Column()
    type: ImgType

    @Column()
    flavour: Flavour

    @Column()
    price: number

    @Column()
    stock: number

    @Column()
    image: string

    @OneToOne(() => CounterMySqlEntity, (counter) => counter.poster)
    counter?: CounterMySqlEntity
}