import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class StockHistoryService {
  // @Cron('* * * * *')
  async migrationStockHistory() {
  }
}
