import { PriceVo } from "../vo/price.vo";

export const priceTransformer = Object.freeze({
  from: (price: number | string) => new PriceVo(price),
  to: (vo: PriceVo) => vo.price,
})