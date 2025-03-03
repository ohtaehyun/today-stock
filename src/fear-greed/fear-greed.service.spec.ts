import { Test, TestingModule } from '@nestjs/testing';
import { FearGreedService } from './fear-greed.service';

describe('FearGreedService', () => {
  let service: FearGreedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FearGreedService],
    }).compile();

    service = module.get<FearGreedService>(FearGreedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
