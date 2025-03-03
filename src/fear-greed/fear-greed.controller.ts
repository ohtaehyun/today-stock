import { Controller, Get } from '@nestjs/common';
import { FearGreedService } from './fear-greed.service';
import { FearGreedResponseDto } from './dto/fear-greed-response.dto';

@Controller('fear-greed')
export class FearGreedController {
  constructor(private readonly fearGreedService: FearGreedService) {

  }

  @Get()
  async getFearAndGreedIndex() {
    const fearGreed = await this.fearGreedService.getLatestFearGreed();
    return FearGreedResponseDto.of(fearGreed);
  }
}
