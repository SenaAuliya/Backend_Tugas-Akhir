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
import { InggrisService } from './inggris.service';
import { retry } from 'rxjs';
import { createDataInggris } from './dto';

@Controller('inggris')
export class InggrisController {
  constructor(private inggrisService: InggrisService) {}

  @Get()
  async getAll() {
    return await this.inggrisService.findAll();
  }

  @Post()
  async createData(@Body() Body:createDataInggris) {
    return await this.inggrisService.createData(Body);
  }

  @Patch('/:id')
  async updateData(@Param('id', ParseIntPipe) id: number, @Body() Body:createDataInggris) {
    return await this.inggrisService.updateData(id, Body);
  }

  @Delete('/:id')
  async deleteData(@Param('id', ParseIntPipe) id) {
    return await this.inggrisService.deleteData(id);
  }
}
