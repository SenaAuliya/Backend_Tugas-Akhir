import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createDataPuisi } from './dto';

@Injectable()
export class PuisiService {
  constructor(private dbService: PrismaService) {}

  async findAll() {
    return await this.dbService.puisi.findMany();
  }

  async createData(data: createDataPuisi) {
    return await this.dbService.puisi.create({
      data,
    });
  }

  async updateData(id: number, data: createDataPuisi) {
    return await this.dbService.puisi.update({
      data,
      where: {
        id,
      },
    });
  }

  async deleteData(id){
    return await this.dbService.puisi.delete({
        where:{
            id,
        }
    })
  }
}
