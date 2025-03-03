import { Injectable } from '@nestjs/common';
import yahooFinance from 'yahoo-finance2';
import { ChartRequestDto } from './dto/chart-request.dto';
import { YahooChartResponseDto } from './dto/chart-response.dto';
import quoteSummary from 'yahoo-finance2/dist/esm/src/modules/quoteSummary';

@Injectable()
export class YahooFinanceService {
  async findChartData(requestDto: ChartRequestDto): Promise<YahooChartResponseDto[]> {
    const { quotes = [] } = await yahooFinance.chart(requestDto.ticker.ticker, requestDto.options);
    return quotes.map(q => YahooChartResponseDto.rowOf(q));
  }
}
