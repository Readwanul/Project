import { Injectable } from '@nestjs/common';
import { HouseOwner } from './houseowner.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HouseownerService {
    constructor(
        @InjectRepository(HouseOwner) private HouseOwnerRepo: Repository<HouseOwner>
    ){}


    async dbAdd(data: HouseOwner): Promise<HouseOwner> {
        return this.HouseOwnerRepo.save(data);
    }
    
    async getall(): Promise<HouseOwner[]> {
        return this.HouseOwnerRepo.find();
    }
    
}
