import { Module } from '@nestjs/common';
import { TickerService } from './ticker.service';
import { TickerController } from './ticker.controller';
import { TickerRepository } from './ticker.repository';

@Module({
  controllers: [TickerController],
  providers: [TickerService, TickerRepository],
  exports: [TickerRepository],
})
export class TickerModule { }
