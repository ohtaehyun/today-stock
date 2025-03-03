import { Body, Controller, Post } from '@nestjs/common';
import { TickerCreateRequestDto } from './dto/ticker-create-request.dto';
import { TickerService } from './ticker.service';

@Controller('ticker')
export class TickerController {
  constructor(private readonly tickerService: TickerService) { }

  @Post()
  async createTicker(@Body() createDto: TickerCreateRequestDto) {
    await this.tickerService.createTicker(createDto);
  }
}
