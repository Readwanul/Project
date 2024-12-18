/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity'; 
import { LoginDto } from 'src/dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
    constructor(@InjectRepository(Admin)
    private adminRepo: Repository<Admin>,
    private readonly jwtService: JwtService,) {}

  async loginAccess(loginDto: LoginDto): Promise<string> {
    const { email, password } = loginDto;
    const admin = await this.adminRepo.findOne({ where: { email } });

    if (!admin) {
      throw new NotFoundException('Admin not found'); // Handle admin not found
    }

    if (admin.password !== password) {
      throw new UnauthorizedException('Invalid password'); // Handle invalid password
    }

    const payload = { email: admin.email, id: admin.id };
    const token = this.jwtService.sign(payload);

    return `Login successful. \ntoken: ${token}`; 
  }

  dbAdd(data)
  {
   return this.adminRepo.save(data)
  }

  getall() 
  {
   return this.adminRepo.find()
  }

  search(data) 
  {
   return this.adminRepo.find({
    where: { name:data.name },
  });
  }
}

