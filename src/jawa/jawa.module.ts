import { Module } from '@nestjs/common';
import { JawaService } from './jawa.service';
import { JawaController } from './jawa.controller';

@Module({
  providers: [JawaService],
  controllers: [JawaController]
})
export class JawaModule {}
