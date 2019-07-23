import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const options = new DocumentBuilder()
  .setTitle('Snusik ECommerce')
  .setDescription('The Snusik API description')
  .setVersion('1.0')
  .setBasePath('api')
  .addTag('Snusik')
  .addBearerAuth('Authorization', 'header')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);
  await app.listen(3000);
}
bootstrap();
