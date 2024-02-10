import { Test, TestingModule } from '@nestjs/testing';
import { MainControllerController } from './main-controller.controller';
import { MainControllerService } from './main-controller.service';

describe('MainControllerController', () => {
  let mainControllerController: MainControllerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MainControllerController],
      providers: [MainControllerService],
    }).compile();

    mainControllerController = app.get<MainControllerController>(MainControllerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mainControllerController.getHello()).toBe('Hello World!');
    });
  });
});
