import { Module } from '@nestjs/common';
import { SejarahService } from './sejarah.service';
import { SejarahController } from './sejarah.controller';

@Module({
  providers: [SejarahService],
  controllers: [SejarahController]
})
export class SejarahModule {}
