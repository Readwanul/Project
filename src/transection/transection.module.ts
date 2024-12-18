/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TransectionService} from './transection.service';
import { TransectionController } from './transection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './transection.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Transaction]),
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
  controllers: [TransectionController],
  providers: [TransectionService],
})
export class TransectionModule {}

