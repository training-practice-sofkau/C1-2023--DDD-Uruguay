import { CounterDomainEntity } from "src/subdomains/store/contexts/sells/domain";
import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm"
import { PosterMySqlEntity } from "./poster.entity";
import { ProductMySqlEntity } from "./product.entity";


@Entity("counter", { schema: "public" })
export class CounterMySqlEntity extends CounterDomainEntity {
    @PrimaryGeneratedColumn('uuid')
    counterId: string

    @OneToOne(() => ProductMySqlEntity, (product) => product.counter,
        {
            cascade: ['insert', 'update'],
        },
    )
    @JoinColumn()
    product: ProductMySqlEntity;


    @OneToOne(() => PosterMySqlEntity, (poster) => poster.counter,
        {
            cascade: ['insert', 'update'],
        },
    )
    @JoinColumn()
    poster: PosterMySqlEntity
}