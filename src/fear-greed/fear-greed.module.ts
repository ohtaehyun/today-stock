import { Module } from '@nestjs/common';
import { FearGreedController } from './fear-greed.controller';
import { FearGreedService } from './fear-greed.service';

@Module({
  controllers: [FearGreedController],
  providers: [FearGreedService]
})
export class FearGreedModule {}
