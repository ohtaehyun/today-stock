import dayjs, { Dayjs } from "dayjs";

interface IMaxTradeRowData {
  tickerId: number;
  ticker: string;
  maxTradeDate: string;
}

export class MaxTradeDate {
  tickerId: number;
  ticker: string;
  maxTradeDate: Dayjs;

  static rowOf(row: IMaxTradeRowData): MaxTradeDate {
    const mtd = new this();
    mtd.tickerId = row.tickerId;
    mtd.ticker = row.ticker;
    mtd.maxTradeDate = row.maxTradeDate ? dayjs(row.maxTradeDate).startOf('day') : dayjs('1999-12-31').startOf('day');
    return mtd;
  }
}