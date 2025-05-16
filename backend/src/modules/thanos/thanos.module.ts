import { Module } from '@nestjs/common';
import { ThanosController } from './controllers/thanos.controller';
import { ThanosService } from './services/thanos.service';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule],
  controllers: [ThanosController],
  providers: [ThanosService],
})
export class ThanosModule {}
