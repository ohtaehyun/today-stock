import dayjs, { Dayjs } from "dayjs";

export const timestamptzTransformer = Object.freeze({
  from: (date: Date) => date ? dayjs(date) : null,
  to: (day: Dayjs) => day ? day.toISOString() : null
});