import { Controller,Post,Body,Get } from '@nestjs/common';
import { HouseownerService } from './houseowner.service';

@Controller('houseowner')
export class HouseownerController {
    constructor(private HouseownerService: HouseownerService) {}

    @Post('add')
    dbAdd(@Body() data) { 
            return this.HouseownerService.dbAdd(data);
    }


    @Get('all')
    dbinfo() {
        return this.HouseownerService.getall();
    }
}
