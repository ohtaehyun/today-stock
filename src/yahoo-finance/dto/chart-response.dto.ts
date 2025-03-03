import dayjs, { Dayjs } from "dayjs";
import { PriceVo } from "src/db/vo/price.vo";

interface IRowChartData {
  date: string | number;
  high: number;
  low: number;
  open: number;
  close: number;
  volume: number;
}

export class YahooChartResponseDto {
  timestamp: Dayjs;
  highPrice: PriceVo;
  lowPrice: PriceVo;
  openPrice: PriceVo;
  closePrice: PriceVo;
  volume: number;

  static rowOf(row: IRowChartData): YahooChartResponseDto {
    const dto = new this();
    dto.timestamp = dayjs(row.date);
    dto.highPrice = new PriceVo(row.high);
    dto.lowPrice = new PriceVo(row.low);
    dto.openPrice = new PriceVo(row.open);
    dto.closePrice = new PriceVo(row.close);
    dto.volume = row.volume
    return dto;
  }
}