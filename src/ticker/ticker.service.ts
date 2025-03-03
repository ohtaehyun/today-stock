import { Injectable } from '@nestjs/common';
import { TickerRepository } from './ticker.repository';
import { TickerCreateRequestDto } from './dto/ticker-create-request.dto';
import { Ticker } from './entity/ticker.entity';

@Injectable()
export class TickerService {
  constructor(
    private readonly tickerRepository: TickerRepository,
  ) {

  }

  async createTicker(createDto: TickerCreateRequestDto) {
    const ticker = Ticker.nameOf(createDto.ticker);
    await this.checkDuplicate(ticker);
    await this.tickerRepository.saveOne(ticker);
  }

  private async checkDuplicate(ticker: Ticker) {
    const existTicker = await this.tickerRepository.findOneByTickerName(ticker.ticker);
    if (existTicker) {
      throw new Error('이미 존재하는 티커입니다.');
    }
  }
}
