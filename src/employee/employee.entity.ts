/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum employeerole {
    MANAGER = 'Manager',
    EMPLOYEE = 'Employee', // Corrected spelling
}

@Entity()
export class employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string; // Storing password in plain text (not recommended for production)

    @Column({
        type: 'enum',
        enum: employeerole,
        default: employeerole.EMPLOYEE, // Default role is EMPLOYEE
    })
    role: employeerole;
}
