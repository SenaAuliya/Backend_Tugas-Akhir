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
import { JawaService } from './jawa.service';
import { createDataJawa } from './dto';

@Controller('jawa')
export class JawaController {
  constructor(private jawaService: JawaService) {}

  @Get()
  async getAll() {
    return await this.jawaService.findAll();
  }

  @Post()
  async createData(@Body() Body: createDataJawa) {
    return await this.jawaService.createData(Body);
  }

  @Patch('/:id')
  async updateData(@Param('id', ParseIntPipe) id: number,@Body() Body:createDataJawa) {
    return await this.jawaService.updateData(id, Body);
  }

  @Delete('/:id')
  async deleteData(@Param('id', ParseIntPipe) id) {
    return await this.jawaService.deleteData(id);
  }
}
