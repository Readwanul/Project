/* eslint-disable prettier/prettier */
import { Controller,Body,Post,Get,Patch,Param,UseGuards } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { Role } from 'src/employee/role.enum';
import { Roles } from 'src/employee/roles.decorator';
import { RolesGuard } from 'src/employee/roles.guard';
import { AuthGuard } from '@nestjs/passport';
@Controller('properties')
export class PropertiesController {
    constructor(private PropertiesService: PropertiesService) {}

    @UseGuards(AuthGuard('jwt'), RolesGuard) 
    @Roles(Role.Manager, Role.Employee)
        @Get('all')
        dbinfo(){
            return this.PropertiesService.getall();
        }


        @Patch("action")
        @UseGuards(AuthGuard('jwt'), RolesGuard) 
        @Roles(Role.Manager, Role.Employee)
        uid(@Param('id') id , @Body() data)
        {
          return this.PropertiesService.uid(id,data)
        }
}
