/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Properties } from './properties.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/employee/jwt.strategy';
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
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'Read1', // Use the same secret
        }),
        
      ],
  controllers: [PropertiesController],
  providers: [PropertiesService,JwtStrategy],
})

export class PropertiesModule {
}
