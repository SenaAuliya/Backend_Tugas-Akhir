import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDataDto } from './dto';

@Injectable()
export class MatematikaService {
  constructor(private dbService: PrismaService) {}

  async findAll() {
    return await this.dbService.matematika.findMany();
  }

  async createData(data: CreateDataDto) {
    return await this.dbService.matematika.create({
      data,
    });
  }

  async updateData(id: number, data: CreateDataDto) {
    return await this.dbService.matematika.update({
      data,
      where: {
        id,
      },
    });
  }

  async deleteData(id: number) {
    return await this.dbService.matematika.delete({
      where: {
        id,
      },
    });
  }
}
