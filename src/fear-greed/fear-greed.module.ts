import { Module } from '@nestjs/common';
import { FearGreedController } from './fear-greed.controller';
import { FearGreedService } from './fear-greed.service';
import { FearGreedRepository } from './fear-greed.repository';

@Module({
  controllers: [FearGreedController],
  providers: [FearGreedService, FearGreedRepository]
})
export class FearGreedModule { }
