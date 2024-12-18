/* eslint-disable prettier/prettier */
import { Controller,Body,Post,Get } from '@nestjs/common';
import { LoginDto } from 'src/dto/login.dto';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}
    @Post('login')
    getlogin(@Body() logindto:LoginDto)
    {
        return this.adminService.loginAccess(logindto);
    }

    @Post('add')
    dbAdd(@Body() data)
    {
      return this.adminService.dbAdd(data)
    }

    @Get('all')
    dbinfo(){
        return this.adminService.getall();
    }

    @Post('search')
    dbsearch(@Body() data){
        return this.adminService.search(data);
    }


}

