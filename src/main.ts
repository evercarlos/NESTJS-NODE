import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('BACKEND CUANTISOFT')
    .setDescription('Api para Youtube')
    .setVersion('1.0')
    .addTag('items')
    //.addTag('items')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  //SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe()); // para validaciones de DTO
  SwaggerModule.setup('documentation', app, document);
  
  await app.listen(3000);
}
bootstrap();
