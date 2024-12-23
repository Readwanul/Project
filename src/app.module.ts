/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PropertiesModule } from './properties/properties.module';
import { TransectionModule } from './transection/transection.module';
import { EmployeeModule } from './employee/employee.module';
import { HouseownerModule } from './houseowner/houseowner.module';

@Module({
  imports: [PropertiesModule, TransectionModule, EmployeeModule, HouseownerModule],
})
export class AppModule {}
