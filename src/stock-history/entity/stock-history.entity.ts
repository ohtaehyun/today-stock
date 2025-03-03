import dayjs, { Dayjs } from "dayjs";
import { timestamptzTransformer } from "src/db/transformer/timestamptz.transformer";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { CANDLE_TYPE } from "../constant/candle-type.constant";
import { priceTransformer } from "src/db/transformer/price.transformer";
import { PriceVo } from "src/db/vo/price.vo";
import { YahooChartResponseDto } from "src/yahoo-finance/dto/chart-response.dto";
import { Ticker } from "src/ticker/entity/ticker.entity";

@Entity({ name: 'stock_history' })
export class StockHistory {
  @PrimaryColumn({ name: 'ticker_id', type: 'int4' })
  tickerId: number;

  @PrimaryColumn({
    name: 'trade_date',
    type: 'timestamptz',
    transformer: timestamptzTransformer,
  })
  tradeDate: Dayjs;

  @PrimaryColumn({
    name: 'candle_type',
    type: 'int',
    enum: CANDLE_TYPE,
  })
  candleType: CANDLE_TYPE

  @Column({
    name: 'open_price',
    type: 'numeric',
    transformer: priceTransformer,
  })
  openPrice: PriceVo;

  @Column({
    name: 'high_price',
    type: 'numeric',
    transformer: priceTransformer,
  })
  highPrice: PriceVo;

  @Column({
    name: 'low_price',
    type: 'numeric',
    transformer: priceTransformer,
  })
  lowPrice: PriceVo;

  @Column({
    name: 'close_price',
    type: 'numeric',
    transformer: priceTransformer,
  })
  closePrice: PriceVo;

  @Column({
    name: 'volume',
    type: 'numeric',
  })
  volume: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    transformer: timestamptzTransformer,
  })
  createdAt: Dayjs;

  static yahooChartOf(ticker: Ticker, yahooChart: YahooChartResponseDto, candleType: CANDLE_TYPE): StockHistory {
    const history = new this();
    history.tickerId = ticker.tickerId;
    history.tradeDate = yahooChart.timestamp;
    history.candleType = candleType;
    history.openPrice = yahooChart.openPrice;
    history.closePrice = yahooChart.closePrice;
    history.highPrice = yahooChart.highPrice;
    history.lowPrice = yahooChart.lowPrice;
    history.volume = yahooChart.volume;
    history.createdAt = dayjs();
    return history;
  }
}