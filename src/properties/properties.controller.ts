/* eslint-disable prettier/prettier */
import { Controller,Body,Post,Get,Patch,Param } from '@nestjs/common';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {
    constructor(private readonly PropertiesService: PropertiesService) {}

        @Post('add')
        dbAdd(@Body() data)
        {
          return this.PropertiesService.dbAdd(data)
        }

        @Get('all')
        dbinfo(){
            return this.PropertiesService.getall();
        }

    @Patch("action")
    uid(@Param('id') id , @Body() data)
    {
      return this.PropertiesService.uid(id,data)
    }
}
