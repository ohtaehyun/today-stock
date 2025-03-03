import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Ticker } from "./entity/ticker.entity";

@Injectable()
export class TickerRepository {
  private readonly repository: Repository<Ticker>;

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(Ticker);
  }

  async saveOne(ticker: Ticker): Promise<Ticker> {
    return await this.repository.save(ticker);
  }

  async findOneByTickerName(tickerName: string): Promise<Ticker | null> {
    return await this.repository.findOneBy({ ticker: tickerName });
  }

  async find(): Promise<Ticker[]> {
    return await this.repository.find();
  }
}