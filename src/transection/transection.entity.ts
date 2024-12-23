/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { HouseOwner } from 'src/houseowner/houseowner.entity'; 

export enum TransactionStatus {
  PENDING = 'Pending',
  COMPLETED = 'Completed',
  FAILED = 'Failed',
}

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  tid: number;

  @OneToOne(() => HouseOwner) // Define the one-to-one relationship
  @JoinColumn() // Specify the owning side of the relationship
  transactionTo: HouseOwner;

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
