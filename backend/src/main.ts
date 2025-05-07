import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const logger = new Logger('NestApplication');

  const configService = app.get(ConfigService);

  const port = configService.get('PORT');

  app.useLogger(logger);

  app.enableCors({
    origin: '*',
    allowedHeaders: ['*'],
    methods: ['*'],
    credentials: true,
  });

  await app.listen(port, () => {
    logger.log(`Server is running on port ${port}`);
  });
}
bootstrap();
