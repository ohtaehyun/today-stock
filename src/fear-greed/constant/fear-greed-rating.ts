export enum FEAR_GREED_RATING {
  EXTREME_FEAR = 1,
  FEAR = 2,
  NURTRAL = 3,
  GREED = 4,
  EXTREME_GREED = 5,
}

export enum FEAR_GREED_RAING_ENG {
  EXTREME_FEAR = 'extreme fear',
  FEAR = 'fear',
  NURTRAL = 'nutural',
  GREED = 'greed',
  EXTREME_GREED = 'extreme greed',
}

export class FearGreedRatingMapper {
  static toEng(rating: FEAR_GREED_RATING) {
    switch (rating) {
      case FEAR_GREED_RATING.EXTREME_FEAR:
        return FEAR_GREED_RAING_ENG.EXTREME_FEAR;
      case FEAR_GREED_RATING.FEAR:
        return FEAR_GREED_RAING_ENG.FEAR;
      case FEAR_GREED_RATING.NURTRAL:
        return FEAR_GREED_RAING_ENG.NURTRAL;
      case FEAR_GREED_RATING.GREED:
        return FEAR_GREED_RAING_ENG.GREED;
      case FEAR_GREED_RATING.EXTREME_GREED:
        return FEAR_GREED_RAING_ENG.EXTREME_GREED;
    }
  }

  static toEnum(eng: FEAR_GREED_RAING_ENG) {
    switch (eng) {
      case FEAR_GREED_RAING_ENG.EXTREME_FEAR:
        return FEAR_GREED_RATING.EXTREME_FEAR;
      case FEAR_GREED_RAING_ENG.FEAR:
        return FEAR_GREED_RATING.FEAR;
      case FEAR_GREED_RAING_ENG.NURTRAL:
        return FEAR_GREED_RATING.NURTRAL;
      case FEAR_GREED_RAING_ENG.GREED:
        return FEAR_GREED_RATING.GREED;
      case FEAR_GREED_RAING_ENG.EXTREME_GREED:
        return FEAR_GREED_RATING.EXTREME_GREED;
    }
  }
}