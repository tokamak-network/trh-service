import { Module } from '@nestjs/common';
import { ThanosController } from './controllers/thanos.controller';
@Module({
  imports: [],
  controllers: [ThanosController],
  providers: [],
})
export class ThanosModule {}
