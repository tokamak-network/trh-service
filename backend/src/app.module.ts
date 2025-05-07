import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TrhSdkModule } from './modules/trh-sdk/trh-sdk.module';
import { ThanosModule } from './modules/thanos/thanos.module';
import { HealthCheckModule } from './modules/health-check/health-check.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    HealthCheckModule,
    TrhSdkModule,
    ThanosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
