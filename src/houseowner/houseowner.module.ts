import { Module } from '@nestjs/common';
import { HouseownerController } from './houseowner.controller';
import { HouseownerService } from './houseowner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseOwner } from './houseowner.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([HouseOwner]),
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
    ],
    providers:[HouseownerService],
    controllers:[HouseownerController],
})
export class HouseownerModule {}
