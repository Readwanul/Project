/* eslint-disable prettier/prettier */
import { Controller,Body,Post,Get,Patch,Param,UseGuards } from '@nestjs/common';
import { TransectionService } from './transection.service';
import { Role } from 'src/employee/role.enum';
import { RolesGuard } from 'src/employee/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/employee/roles.decorator';

@Controller('transection')
export class TransectionController {
    constructor(private readonly transectionService: TransectionService) {}

    @Post('add')
    dbAdd(@Body() data)
    {
      return this.transectionService.dbAdd(data)
    }
    
    @Get('all')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.Manager, Role.Employee)
    dbinfo(){
        return this.transectionService.getall();
    }

    @Patch("action")
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.Manager, Role.Employee)
    uid(@Param('id') id , @Body() data)
    {
      return this.transectionService.uid(id,data)
    }
}

