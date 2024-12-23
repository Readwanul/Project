/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { employee } from './employee.entity';

@Entity()
export class EmployeeLoginDuration {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => employee, (employee) => employee.id, { onDelete: 'CASCADE' })
  employee: employee;

  @Column({ type: 'timestamp' })
  loginTime: Date;

  @Column({ type: 'timestamp', nullable: true })
  logoutTime: Date;

  @Column({ type: 'float', nullable: true }) 
  durationInHours: number; 
}
