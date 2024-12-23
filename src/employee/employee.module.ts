/* eslint-disable prettier/prettier */ 
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../employee/jwt.strategy';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { employee } from './employee.entity';
import { EmployeeLoginDuration } from './EmployeeLoginDuration.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([employee,EmployeeLoginDuration]),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'Houserent',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'Read1', // Use the same secret
        }),
    ],
    controllers: [EmployeeController],
    providers: [EmployeeService, JwtStrategy],
})
export class EmployeeModule {

}
