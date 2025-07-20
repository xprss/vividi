import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConsoleLogger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      prefix: 'Vividi',
      logLevels: ['error', 'warn', 'log', 'debug', 'verbose'],
    }),
  });

  const allowedOrigins = [
    'http://localhost:4200',
    'http://client:4200',
    'https://ottonovembre.it',
    'https://www.ottonovembre.it',
    'https://beta.ottonovembre.it',
    'https://www.beta.ottonovembre.it',
  ];

  app.enableCors({
    origin: allowedOrigins,
    credentials: false,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Vividi')
    .setDescription(
      "The Vividi's APIs exposed to celebrate a wonderful wedding.",
    )
    .setVersion(process.env.VIVIDI_VERSION ?? '1.0.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
