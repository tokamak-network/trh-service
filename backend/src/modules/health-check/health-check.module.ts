import { Module } from '@nestjs/common';
import { HealthCheckController } from './controllers/health-check.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [HealthCheckController],
  providers: [],
})
export class HealthCheckModule {}
