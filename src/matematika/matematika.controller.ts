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
import { MatematikaService } from './matematika.service';
import { CreateDataDto } from './dto';

@Controller('matematika')
export class MatematikaController {
  constructor(private matematikaService: MatematikaService) {}

  @Get()
  async getAll() {
    return this.matematikaService.findAll();
  }

  @Post()
  async createData(@Body() Body: CreateDataDto) {
    return await this.matematikaService.createData(Body);
  }

  @Patch('/:id')
  async updateData(@Param('id', ParseIntPipe) id: number, @Body() body) {
    return await this.matematikaService.updateData(id, body);
  }

  @Delete('/:id')
  async deleteData(@Param('id', ParseIntPipe) id) {
    return await this.matematikaService.deleteData(id);
  }
}
