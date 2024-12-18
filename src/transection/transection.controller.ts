/* eslint-disable prettier/prettier */
import { Controller,Body,Post,Get,Patch,Param } from '@nestjs/common';
import { TransectionService } from './transection.service';


@Controller('transection')
export class TransectionController {
    constructor(private readonly transectionService: TransectionService) {}

    @Post('add')
    dbAdd(@Body() data)
    {
      return this.transectionService.dbAdd(data)
    }

    @Get('all')
    dbinfo(){
        return this.transectionService.getall();
    }

    @Patch("action")
    uid(@Param('id') id , @Body() data)
    {
      return this.transectionService.uid(id,data)
    }
}

