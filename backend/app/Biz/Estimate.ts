export interface CostType {
  gross: number
  net: number
}

export default class Estimate {
  /**
   * Simplified health insurance estimate
   * @param charge: number Gross healthcare fee
   * @param paid: number Sum of patient's payments for past year
   * @returns {gross: number, net: number}
   */
  public static calc(charge: number, paid: number): CostType {
    const coinsurance = 0.2 // (this is actually 100% - coinsurance)
    const copay = 25
    const deductable = 1000 // TODO move these to db

    if (paid > deductable) {
      return { gross: charge, net: copay }
    }
    // eslint-disable-next-line prettier/prettier
    return { gross: charge, net: (charge * coinsurance) + copay }
  }
}
