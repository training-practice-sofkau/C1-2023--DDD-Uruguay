import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { TeamPostgreEntity } from "../team/team.entity";
import { RivalPostgreEntity } from "./rival.entity";
import { StadiumPostgreEntity } from './stadium.entity';

@Entity('match', {schema: 'public'})
export class MatchPostgreEntity {

    @PrimaryColumn('uuid', {
        primary: true,
        name: 'match_id',
    })
    matchId: string;
    
    @Column('character varying', {name: 'team_id',})
    @ManyToOne(() => TeamPostgreEntity, team => team.teamId)
    team: TeamPostgreEntity;

    @Column('character varying', {name: 'score',})
    score: string;
    
    @Column('character varying', {name: 'rival_id',})
    @ManyToOne(() => RivalPostgreEntity, rival => rival.rivalId)
    rival: RivalPostgreEntity;
    
    @Column('character varying', {name: 'stadium_id',})
    @ManyToOne(() => StadiumPostgreEntity, stadium => stadium.stadiumId)
    stadium: StadiumPostgreEntity;
    
    @Column('date', {name: 'date',})
    date: Date
}