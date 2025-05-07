import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrhSdkModule } from './modules/trh-sdk/trh-sdk.module';
import { ThanosModule } from './modules/thanos/thanos.module';
import { HealthCheckModule } from './modules/health-check/health-check.module';
import { configuration } from './common/config/configuration';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('db.host'),
        port: configService.get('db.port'),
        username: configService.get('db.username'),
        password: configService.get('db.password'),
        database: configService.get('db.database'),
        entities: [__dirname + '/entities/**/*.entity.{js,ts}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    HealthCheckModule,
    TrhSdkModule,
    ThanosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
