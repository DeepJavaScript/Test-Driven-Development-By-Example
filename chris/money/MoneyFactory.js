import Dollar from "../dollar/Dollar.js"
import Franc from "../franc/Franc.js"

export default class MoneyFactory {
  static dollar(amount) {
    return new Dollar(amount)
  }
  static franc(amount) {
    return new Franc(amount)
  }
}
