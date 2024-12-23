/* eslint-disable prettier/prettier */
import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transection.entity';

@Injectable()
export class TransectionService {
        constructor(@InjectRepository(Transaction)
        private transectionrepo: Repository<Transaction>) {}
        
        
  dbAdd(data: any) {
    data.platformCharge = data.totalAmount * 0.05; 
    return this.transectionrepo.save(data);
  }

  getall() 
  {
   return this.transectionrepo.find()
  }

  async uid(tid,data)
  {
   const n_id=await this.transectionrepo.findOne({where:{tid}})
   if(!n_id){
     return "not found"
   }
   const s=Object.assign(n_id,data)
   return this.transectionrepo.save(s)
  }
}
