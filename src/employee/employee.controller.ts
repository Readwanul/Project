/* eslint-disable prettier/prettier */
import { Controller, Body, Post, Get, UseGuards, Req } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { EmployeeService } from './employee.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard'; // Ensure this is named correctly
import { Role } from './role.enum';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) {}

    @Post('login')
    getlogin(@Body() logindto: LoginDto) {
        return this.employeeService.loginAccess(logindto);
    }

    @Post('add')
    @UseGuards(AuthGuard('jwt'), RolesGuard) 
    @Roles(Role.Manager) 
    dbAdd(@Body() data) { 
        return this.employeeService.dbAdd(data);
    }

    @Post('logout')
    @UseGuards(AuthGuard('jwt'))
    async logout(@Req() req): Promise<string> {
    const userId = req.user.id;
    await this.employeeService.recordLogout(userId);
    return 'Logout successful. Duration recorded.';
    }

    @Get('all')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.Manager)
    dbinfo() {
        return this.employeeService.getall();
    }

    @Post('search')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.Manager) // Only employees can search
    dbsearch(@Body() data) {
        return this.employeeService.search(data);
    }

    @Post('history')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.Manager) // Only employees can search
    dbhistory() {
        return this.employeeService.gethistory();
    }
}
