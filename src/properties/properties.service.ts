/* eslint-disable prettier/prettier */
import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Properties } from './properties.entity';

@Injectable()
export class PropertiesService {
        constructor(@InjectRepository(Properties)
        private Propertiesrepo: Repository<Properties>) {}


    getall() 
    {
     return this.Propertiesrepo.find()
    }
    
    async uid(id,data)
  {
   const n_id=await this.Propertiesrepo.findOne({where:{id}})
   if(!n_id){
     return "not found"
   }
   const s=Object.assign(n_id,data)
   return this.Propertiesrepo.save(s)
  }
}
