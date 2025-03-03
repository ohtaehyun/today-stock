import { FEAR_GREED_RAING_ENG, FearGreedRatingMapper } from "../constant/fear-greed-rating"
import { FearGreed } from "../entity/fear-greed.entity";

export class FearGreedResponseDto {
  timestamp: Date;
  rating: FEAR_GREED_RAING_ENG;
  score: number;

  static of(fg: FearGreed): FearGreedResponseDto {
    const dto = new this();
    dto.timestamp = fg.fearGreedTimestamp.toDate();
    dto.rating = FearGreedRatingMapper.toEng(fg.rating);
    dto.score = fg.score.score;
    return dto;
  }
}