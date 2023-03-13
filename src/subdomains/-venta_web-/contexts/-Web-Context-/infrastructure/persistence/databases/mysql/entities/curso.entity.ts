import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"

import { ClienteDomainEntity, CursoDomainEntity } from "src/subdomains";
import { CompraMySqlEntity } from "./compra.entity";

@Entity()
export class CursoMySqlEntity extends CursoDomainEntity {

    @PrimaryGeneratedColumn('uuid')
    idCurso: string;

    @Column()
    nombreCurso: string;

    @Column()
    nombreTeacher: string;

    @Column()
    costoCurso: number;

    //RELACIONES

    @OneToOne( ()=> CompraMySqlEntity, (compra)=> compra.curso )
    compra: CompraMySqlEntity;
}