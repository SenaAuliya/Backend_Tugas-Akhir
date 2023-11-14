import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { MatematikaModule } from './matematika/matematika.module';
import { SejarahModule } from './sejarah/sejarah.module';
import { InggrisModule } from './inggris/inggris.module';
import { JawaModule } from './jawa/jawa.module';
import { PuisiModule } from './puisi/puisi.module';

@Module({
  imports: [PrismaModule, MatematikaModule, SejarahModule, InggrisModule, JawaModule, PuisiModule],
})
export class AppModule {}
