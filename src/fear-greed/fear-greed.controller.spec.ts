import { Test, TestingModule } from '@nestjs/testing';
import { FearGreedController } from './fear-greed.controller';

describe('FearGreedController', () => {
  let controller: FearGreedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FearGreedController],
    }).compile();

    controller = module.get<FearGreedController>(FearGreedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
