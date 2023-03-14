import { PositionEnum } from 'src/subdomains/first-team-structure/contexts/first-team/domain';
import { Column, Entity, OneToMany, PrimaryColumn, ManyToOne } from 'typeorm';
import { TeamPostgreEntity } from './team.entity';

@Entity('player', {schema: 'public'})
export class PlayerPostgreEntity {

    @PrimaryColumn('uuid', {
        primary: true,
        name: 'player_id',
    })
    playerId: string;

    @Column('character varying', {name: 'team_id'})
    @ManyToOne(() => TeamPostgreEntity, team => team.teamId)
    team: TeamPostgreEntity;

    @Column('integer', {name: 'age',})
    age: number;

    @Column('integer', {name: 'wage',})
    wage: number;

    @Column('character varying', {name: 'position'})
    position: PositionEnum;

    @Column('character varying', {name: 'full_name', length: 40})
    fullName: string;
    
    @Column('character varying', {name: 'country', length: 40})
    country: string;
}