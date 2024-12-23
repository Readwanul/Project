/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from 'src/employee/login.dto';
import { JwtService } from '@nestjs/jwt';
import { employee } from './employee.entity';
import { EmployeeLoginDuration } from './EmployeeLoginDuration.entity';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(employee) private employeeRepo: Repository<employee>,
        @InjectRepository(EmployeeLoginDuration) private employeeLoginDurationRepo: Repository<EmployeeLoginDuration>,
        private readonly jwtService: JwtService,
    ) {}

    async loginAccess(loginDto: LoginDto): Promise<string> {
        const { email, password } = loginDto;
        const user = await this.employeeRepo.findOne({ where: { email } });
    
        if (!user) {
            throw new NotFoundException('User not found');
        }
    
        if (user.password !== password) {
            throw new UnauthorizedException('Invalid password');
        }
    
        const currentDate = new Date();
        const payload = {
            email: user.email,
            id: user.id,
            role: user.role,
            date: currentDate.toLocaleDateString(),
            time: currentDate.toLocaleTimeString(),
        };
    
        // Record login
        await this.recordLogin(user.id);
    
        const token = this.jwtService.sign(payload);
        return `Login successful. \ntoken: ${token}`;
    }
    

    async recordLogin(employeeId: number): Promise<void> {
        const loginEntry = this.employeeLoginDurationRepo.create({
            employee: { id: employeeId },
            loginTime: new Date(),
        });
        await this.employeeLoginDurationRepo.save(loginEntry);
    }

    async recordLogout(employeeId: number): Promise<void> {
        const latestLogin = await this.employeeLoginDurationRepo.findOne({
            where: { employee: { id: employeeId }, logoutTime: null },
            order: { loginTime: 'DESC' },
        });
    
        if (!latestLogin) {
            throw new Error('No active login session found for this employee.');
        }
    
        latestLogin.logoutTime = new Date();
        const durationInMilliseconds = latestLogin.logoutTime.getTime() - latestLogin.loginTime.getTime();
        latestLogin.durationInHours = durationInMilliseconds / (1000 * 60 * 60); 
    
        await this.employeeLoginDurationRepo.save(latestLogin);
    }

    gethistory() {
        return this.employeeLoginDurationRepo.find();
    }

    

    async dbAdd(data: employee): Promise<employee> {
        return this.employeeRepo.save(data);
    }

    async getall(): Promise<employee[]> {
        return this.employeeRepo.find();
    }

    async search(data: { name: string }): Promise<employee[]> {
        return this.employeeRepo.find({
            where: { name: data.name },
        });
    }
}
