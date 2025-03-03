import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { StockHistory } from "./entity/stock-history.entity";
import { Ticker } from "src/ticker/entity/ticker.entity";
import { MaxTradeDate } from "./entity/max-trade-date.entity";
import { CANDLE_TYPE } from "./constant/candle-type.constant";

@Injectable()
export class StockHistoryRepository {
  private readonly repository: Repository<StockHistory>;

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(StockHistory);
  }

  async findMaxTradeDateByTicker(ticker: Ticker, candleType: CANDLE_TYPE) {
    const [row] = await this.repository.query(`
      SELECT
        t.ticker_id "tickerId",
        t.ticker "ticker",
        MAX(sh.trade_date) "maxTradeDate"
      FROM
        ticker t
        LEFT JOIN stock_history sh 
          ON t.ticker_id = sh.ticker_id
          AND sh.candle_type = ${candleType}
      WHERE
        t.ticker_id = ${ticker.tickerId}
      GROUP BY
        t.ticker_id
      ;
      `);
    console.log(row);
    return MaxTradeDate.rowOf(row);
  }

  async save(stockHistories: StockHistory[]): Promise<StockHistory[]> {
    return this.repository.save(stockHistories);
  }
}