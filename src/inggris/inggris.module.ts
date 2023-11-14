import { Module } from '@nestjs/common';
import { InggrisService } from './inggris.service';
import { InggrisController } from './inggris.controller';

@Module({
  providers: [InggrisService],
  controllers: [InggrisController]
})
export class InggrisModule {}
