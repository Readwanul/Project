/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
//import { PropertiesController } from './properties.controller';
//import { PropertiesService } from './properties.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Properties } from './properties.entity';
@Module({
    imports: [
        TypeOrmModule.forFeature([Properties]),
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
  /*controllers: [PropertiesController],
  providers: [PropertiesService],*/
})

export class PropertiesModule {
}
