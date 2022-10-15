import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3005;
  const app = await NestFactory.create(AppModule, {
    cors: { origin: 'http://localhost:3006' },
  });
  await app.listen(PORT);
}
bootstrap();
