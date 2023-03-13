import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { CoachPostgreEntity } from './coach.entity';
import { PlayerPostgreEntity } from './player.entity';

@Entity('team', {schema: 'public'})
export class TeamPostgreEntity {

    @PrimaryColumn('uuid', {
        primary: true,
        name: 'team_id',
    })
    teamId: string;
    
    @Column('character varying', {name: 'coach_id'})
    @OneToOne(() => CoachPostgreEntity, coach => coach.coachId)
    coach: CoachPostgreEntity;

    @Column('character varying', {name: 'player_ids'})
    @OneToMany(() => PlayerPostgreEntity, player => player.playerId)
    players: Array<PlayerPostgreEntity>;

    @Column('character varying', {name: 'type', length: 40})
    name: string;

    @Column('character varying', {name: 'town', length: 40})
    town: string;
}