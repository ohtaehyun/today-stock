import { FearGreedScoreVo } from "src/fear-greed/vo/fear-greed-score.vo";

export const fearGreedScoreTransformer = Object.freeze({
  from: (value: number) => new FearGreedScoreVo(value),
  to: (vo: FearGreedScoreVo) => vo.score
})