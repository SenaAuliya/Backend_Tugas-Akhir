import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createDataInggris } from './dto';

@Injectable()
export class InggrisService {
  constructor(private dbService: PrismaService) {}

  async findAll() {
    return await this.dbService.inggris.findMany();
  }

  async createData(data: createDataInggris) {
    return await this.dbService.inggris.create({
      data,
    });
  }

  async updateData(id: number, data: createDataInggris) {
    return await this.dbService.inggris.update({
      data,
      where: {
        id,
      },
    });
  }

  async deleteData(id) {
    return await this.dbService.inggris.delete({
      where: {
        id,
      },
    });
  }
}
