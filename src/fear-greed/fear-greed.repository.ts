import { DataSource, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { FearGreed } from "./entity/fear-greed.entity";

@Injectable()
export class FearGreedRepository {
  private readonly repository: Repository<FearGreed>;

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(FearGreed);
  }

  async upsertOne(fearGreed: FearGreed) {
    await this.repository.upsert(fearGreed, ['fearGreedTimestamp'])
  }

  async findLatestOne() {
    return await this.repository.findOne({ where: {}, order: { fearGreedTimestamp: 'DESC' } });
  }
}