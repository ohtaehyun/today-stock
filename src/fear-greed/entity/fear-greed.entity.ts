import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { FEAR_GREED_RAING_ENG, FEAR_GREED_RATING, FearGreedRatingMapper } from "../constant/fear-greed-rating";
import { FearGreedScoreVo } from "../vo/fear-greed-score.vo";
import { timestamptzTransformer } from "src/db/transformer/timestamptz.transformer";
import dayjs, { Dayjs } from "dayjs";
import { fearGreedScoreTransformer } from "./transformer/fear-greed-score.transformer";

@Entity({ name: 'fear_greed' })
export class FearGreed {
  @PrimaryGeneratedColumn({ name: 'fear_greed_id' })
  fearGreedId: number;

  @Column({
    name: 'fear_greed_timestamp',
    type: 'timestamptz',
    transformer: timestamptzTransformer
  })
  fearGreedTimestamp: Dayjs;

  @Column({ name: 'rating', type: 'int4' })
  rating: FEAR_GREED_RATING;

  @Column({
    name: 'score',
    type: 'int',
    transformer: fearGreedScoreTransformer
  })
  score: FearGreedScoreVo;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    transformer: timestamptzTransformer
  })
  createdAt: Dayjs;

  static rawOf(timestamp: string | number | Date, score: string | number, ratingEng: FEAR_GREED_RAING_ENG): FearGreed {
    const fg = new this();
    fg.fearGreedTimestamp = dayjs(timestamp);
    fg.score = new FearGreedScoreVo(score);
    fg.rating = FearGreedRatingMapper.toEnum(ratingEng);
    fg.createdAt = dayjs();
    return fg;
  }
}