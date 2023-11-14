import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createDataSejarah } from './dto';

@Injectable()
export class SejarahService {
  constructor(private dbService: PrismaService) {}

  async findAll() {
    return await this.dbService.sejarah.findMany();
  }

  async createData(data: createDataSejarah) {
    return await this.dbService.sejarah.create({
      data,
    });
  }

  async updateData(id: number, data: createDataSejarah) {
    return await this.dbService.sejarah.update({
      data,
      where: {
        id,
      },
    });
  }

  async deleteData(id: number) {
    return await this.dbService.sejarah.delete({
      where: {
        id,
      },
    });
  }
}
