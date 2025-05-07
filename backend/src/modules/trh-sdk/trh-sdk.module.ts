import { Module } from '@nestjs/common';
import { TrhSdkController } from './controllers/trh-sdk.controller';
import { CliRunner } from 'src/common/cli/cli-runner';
import { TrhSdkService } from './services/trh-sdk.service';
import { Logger } from '@nestjs/common';
@Module({
  controllers: [TrhSdkController],
  providers: [CliRunner, TrhSdkService, Logger],
})
export class TrhSdkModule {}
