import doValidate from 'aproba'

class SellAction {
  /**
   * @param {string} stockID
   * @param {number} amount
   */
  constructor(stockID, amount) {
    doValidate('SN', arguments)

    this.type = 'SELL'
    this.stockID = stockID
    this.amount = amount
  }
}

export default SellAction
