import { Module } from '@nestjs/common';
import { PuisiService } from './puisi.service';
import { PuisiController } from './puisi.controller';

@Module({
  providers: [PuisiService],
  controllers: [PuisiController]
})
export class PuisiModule {}
