import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { PuisiService } from './puisi.service';
import { createDataPuisi } from './dto';

@Controller('puisi')
export class PuisiController {
  constructor(private puisiService: PuisiService) {}

  @Get()
  async getAll() {
    return await this.puisiService.findAll();
  }

  @Post()
  async createData(@Body() Body: createDataPuisi) {
    return await this.puisiService.createData(Body);
  }

  @Patch('/:id')
  async updateData(
    @Param('id', ParseIntPipe) id: number,
    @Body() Body: createDataPuisi,
  ) {
    return await this.puisiService.updateData(id, Body);
  }

  @Delete('/:id')
  async deleteData(@Param('id', ParseIntPipe) id) {
    return await this.puisiService.deleteData(id);
  }
}
