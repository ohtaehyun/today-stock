import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron } from '@nestjs/schedule';
import axios from 'axios';
import { FearGreed } from './entity/fear-greed.entity';
import { FearGreedRepository } from './fear-greed.repository';

@Injectable()
export class FearGreedService {
  private readonly FEAR_GREED_SCHEDULE_URL: string;
  constructor(
    configService: ConfigService,
    private readonly fearGreedRepository: FearGreedRepository
  ) {
    this.FEAR_GREED_SCHEDULE_URL = configService.get<string>('FEAR_GREED_SCHEDULE_URL', '');
  }

  @Cron('* * * * *')
  async scheduleCreateFearGreed() {
    const { data: { fear_and_greed } } = await axios.get(this.FEAR_GREED_SCHEDULE_URL, {
      headers: {
        "Content-Type": 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
      },
    });

    const fg = FearGreed.rawOf(
      fear_and_greed.timestamp,
      fear_and_greed.score,
      fear_and_greed.rating
    );

    await this.fearGreedRepository.upsertOne(fg);
  }
}
