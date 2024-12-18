/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { PropertiesModule } from './properties/properties.module';
import { TransectionModule } from './transection/transection.module';

@Module({
  imports: [AdminModule, PropertiesModule, TransectionModule],
})
export class AppModule {}
