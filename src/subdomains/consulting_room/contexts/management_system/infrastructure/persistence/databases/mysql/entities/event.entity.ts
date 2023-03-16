import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('event', { schema: 'public' })
export class EventEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    type: string;

    @Column()
    data: string;

    @Column()
    createdAt: number;
}