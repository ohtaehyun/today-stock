import dayjs, { Dayjs } from "dayjs";
import { timestamptzTransformer } from "src/db/transformer/timestamptz.transformer";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'ticker' })
export class Ticker {
  @PrimaryGeneratedColumn({ name: 'ticker_id', type: 'int4' })
  tickerId: number;

  @Column({ name: 'ticker', type: 'varchar' })
  ticker: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    transformer: timestamptzTransformer,
  })
  createdAt: Dayjs

  static nameOf(name: string) {
    const ticker = new Ticker();
    ticker.ticker = name;
    ticker.createdAt = dayjs();
    return ticker;
  }
}