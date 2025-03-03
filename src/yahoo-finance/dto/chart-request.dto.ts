import dayjs, { Dayjs } from "dayjs";
import { Ticker } from "src/ticker/entity/ticker.entity";
import { YAHOO_CHART_INTERVAL } from "../constant/yahoo-chart-interval.constant";
import { ChartOptions } from "yahoo-finance2/dist/esm/src/modules/chart";
interface IYahooOption {
  startDate: Dayjs;
  endDate?: Dayjs;
  interval?: YAHOO_CHART_INTERVAL;
  includePrePost?: boolean
}

export class ChartRequestDto {
  ticker: Ticker;
  options: ChartOptions;

  static of(ticker: Ticker, options: IYahooOption): ChartRequestDto {
    const dto = new this();
    dto.ticker = ticker;
    dto.options = {
      period1: options.startDate.toDate(),
      period2: options.endDate?.toDate() ?? dayjs().toDate(),
      interval: options.interval ?? YAHOO_CHART_INTERVAL.ONE_DAY,
      includePrePost: options.includePrePost ?? false,
      return: 'array',
    };
    return dto;
  }
}