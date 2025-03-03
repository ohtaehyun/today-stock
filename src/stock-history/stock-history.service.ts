import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Ticker } from 'src/ticker/entity/ticker.entity';
import { TickerRepository } from 'src/ticker/ticker.repository';
import { StockHistoryRepository } from './stock-history.repository';
import { CANDLE_TYPE } from './constant/candle-type.constant';
import { YahooFinanceService } from 'src/yahoo-finance/yahoo-finance.service';
import { ChartRequestDto } from 'src/yahoo-finance/dto/chart-request.dto';
import { StockHistory } from './entity/stock-history.entity';
import dayjs from 'dayjs';

@Injectable()
export class StockHistoryService {
  constructor(
    private readonly tickerRepository: TickerRepository,
    private readonly stockHistoryRepository: StockHistoryRepository,
    private readonly yahooFinanceService: YahooFinanceService,
  ) { }

  @Cron('* * * * *')
  async migrationStockHistory() {
    const tickers = await this.tickerRepository.find();
    for (const ticker of tickers) {
      await this.migrateHistoryByTicker(ticker);
    }
  }

  async migrateHistoryByTicker(ticker: Ticker) {
    const maxTradeDate = await this.stockHistoryRepository.findMaxTradeDateByTicker(ticker, CANDLE_TYPE.DAY);
    const startDate = dayjs(maxTradeDate.maxTradeDate).add(1, 'day');
    const endDate = dayjs().add(-1, 'day').endOf('day');
    if (startDate.isAfter(endDate, 'day') || startDate.isSame(endDate, 'day')) {
      return;
    }
    const chartRequestDto = ChartRequestDto.of(ticker, {
      startDate: startDate.add(1, 'day'),
      endDate,
    });
    const yahooCharts = await this.yahooFinanceService.findChartData(chartRequestDto);
    const stockHistories = yahooCharts.map(chart => StockHistory.yahooChartOf(ticker, chart, CANDLE_TYPE.DAY));
    console.log(stockHistories);
    await this.stockHistoryRepository.save(stockHistories);
  }
}
