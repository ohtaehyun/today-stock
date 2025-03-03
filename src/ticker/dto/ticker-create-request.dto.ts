import { IsNotEmpty, IsString } from "class-validator";

export class TickerCreateRequestDto {
  @IsString()
  @IsNotEmpty()
  ticker: string;
}