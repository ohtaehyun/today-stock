import { Module } from '@nestjs/common';
import { StockHistoryService } from './stock-history.service';
import { TickerModule } from 'src/ticker/ticker.module';
import { StockHistoryRepository } from './stock-history.repository';
import { YahooFinanceModule } from 'src/yahoo-finance/yahoo-finance.module';

@Module({
  imports: [TickerModule, YahooFinanceModule],
  providers: [StockHistoryService, StockHistoryRepository]
})
export class StockHistoryModule { }
