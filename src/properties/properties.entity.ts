/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum RequestStatus {
  PENDING = 'Pending',
  ACCEPTED = 'Accepted',
}

@Entity()
export class Properties {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  area: string;

  @Column()
  ownerId: number;

  @Column('decimal', { precision: 7, scale: 2 })
  rentAmount: number;

  @Column({
    type: 'enum',
    enum: RequestStatus,
    default: RequestStatus.PENDING,
  })
  status: RequestStatus;
}
