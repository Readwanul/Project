/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum TransactionStatus {
  PENDING = 'Pending',
  COMPLETED = 'Completed',
  FAILED = 'Failed',
}

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  tid: number;

  @Column()
  transactionTo: number;

  @Column('decimal')
  totalAmount: number;

  @Column('decimal')
  platformCharge: number;

  @Column({
    type: 'enum',
    enum: TransactionStatus,
    default: TransactionStatus.PENDING,
  })
  status: TransactionStatus;
}
