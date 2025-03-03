export class PriceVo {
  private readonly _price: number;

  constructor(price: number | string) {
    this._price = Math.floor(Number(price) * 100) / 100;
  }

  get price() {
    return this._price;
  }
}