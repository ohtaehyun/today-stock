export class FearGreedScoreVo {
  private readonly _score: number;

  constructor(score: number | string) {
    this._score = Math.floor(Number(score));
  }

  get score(): number {
    return this._score;
  }
}