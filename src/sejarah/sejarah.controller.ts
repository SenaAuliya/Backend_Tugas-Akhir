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
import { SejarahService } from './sejarah.service';
import { createDataSejarah } from './dto';

@Controller('sejarah')
export class SejarahController {
  constructor(private sejarahService: SejarahService) {}

  @Get()
  async getAll() {
    return await this.sejarahService.findAll();
  }

  @Post()
  async createData(@Body() Body: createDataSejarah) {
    return await this.sejarahService.createData(Body);
  }

  @Patch('/:id')
  async updateData(
    @Param('id', ParseIntPipe) id: number,
    @Body() Body: createDataSejarah,
  ) {
    return await this.sejarahService.updateData(id, Body);
  }

  @Delete('/:id')
  async deleteData(@Param('id', ParseIntPipe) id: number) {
    return await this.sejarahService.deleteData(id);
  }
}
