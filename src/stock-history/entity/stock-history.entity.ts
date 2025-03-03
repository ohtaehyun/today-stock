import { Dayjs } from "dayjs";
import { timestamptzTransformer } from "src/db/transformer/timestamptz.transformer";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { CANDLE_TYPE } from "../constant/candle-type.constant";
import { priceTransformer } from "src/db/transformer/price.transformer";
import { PriceVo } from "src/db/vo/price.vo";

@Entity({ name: 'stock-history' })
export class StockHistory {
  @PrimaryColumn({ name: 'ticker_id', type: 'int4' })
  tickerId: number;

  @PrimaryColumn({
    name: 'ticker_id',
    type: 'timestamptz',
    transformer: timestamptzTransformer,
  })
  trade_date: Dayjs;

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
}