import { Module } from '@nestjs/common';
import { MatematikaService } from './matematika.service';
import { MatematikaController } from './matematika.controller';

@Module({
  providers: [MatematikaService],
  controllers: [MatematikaController]
})
export class MatematikaModule {}
