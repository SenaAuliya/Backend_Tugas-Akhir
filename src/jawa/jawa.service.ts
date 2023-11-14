import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createDataJawa } from './dto';

@Injectable()
export class JawaService {
  constructor(private dbService: PrismaService) {}

  async findAll() {
    return await this.dbService.jawa.findMany();
  }

  async createData(data: createDataJawa) {
    return await this.dbService.jawa.create({
      data,
    });
  }

  async updateData(id: number, data: createDataJawa) {
    return await this.dbService.jawa.update({
      data,
      where: {
        id,
      },
    });
  }

  async deleteData(id){
    return await this.dbService.jawa.delete({
        where:{
            id,
        }
    })
  }
}
