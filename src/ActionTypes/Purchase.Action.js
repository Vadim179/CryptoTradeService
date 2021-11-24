import doValidate from 'aproba'

class PurchaseAction {
  /**
   * @param {string} stockID
   * @param {number} amount
   */
  constructor(stockID, amount) {
    doValidate('SN', arguments)

    this.type = 'PURCHASE'
    this.stockID = stockID
    this.amount = amount
  }
}

export default PurchaseAction
