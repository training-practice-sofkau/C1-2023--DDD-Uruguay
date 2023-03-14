import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CesionMySqlEntity } from './cesion-mysql.entity';
import { ContratoMySqlEntity } from './contrato-mysql.entity';
import { TraspasoMySqlEntity } from './traspaso-mysql.entity';
import { SecretariaDomainEntity } from 'src/subdomains/area-deportiva/contexts/rrhh/domain/entities';

@Entity('secretaria', { schema: 'public' })
export class SecretariaMySqlEntity extends SecretariaDomainEntity {
  @PrimaryGeneratedColumn('uuid')
  secretariaId?: string;

  @Column()
  staffDeportivoId?: string;

  @Column()
  empleadoId?: string;

  @OneToOne(
    () => CesionMySqlEntity,
    (cesion) => cesion.secretaria,
    {
      cascade:['insert','update']
    }
  )
  @JoinColumn()
  cesion?: CesionMySqlEntity;

  @OneToOne(
    () => TraspasoMySqlEntity,
    (traspaso) => traspaso.secretaria,
    {
      cascade:['insert','update']
    }
  )
  @JoinColumn()
  traspaso?: TraspasoMySqlEntity;

  @OneToOne(
    () => ContratoMySqlEntity,
    (contrato) => contrato.secretaria,
    {
      cascade:['insert','update']
    }
  )
  @JoinColumn()
  contrato?: ContratoMySqlEntity;
}
