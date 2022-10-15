import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('authFromSms', () => {
    it('should return true"', async () => {
      const result = await appController.authFromSms({ code: 123456 });
      expect(result).toBe(true);
    });

    it('should return false"', async () => {
      const result = await appController.authFromSms({ code: 321 });
      expect(result).toBe(false);
    });
  });
});
