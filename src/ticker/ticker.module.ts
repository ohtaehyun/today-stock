import { Module } from '@nestjs/common';
import { TickerService } from './ticker.service';
import { TickerController } from './ticker.controller';
import { TickerRepository } from './ticker.repository';

@Module({
  providers: [TickerService, TickerRepository],
  controllers: [TickerController]
})
export class TickerModule { }
