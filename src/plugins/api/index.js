import ItemGroupApi from './itemGroups'
import ItemApi from './items'
import OptionGroupApi from './optionGroups'
import OptionApi from './options'

class Api {
  constructor() {
    this._locale = ''
    this.itemGroups = new ItemGroupApi()
    this.items = new ItemApi()
    this.optionGroups = new OptionGroupApi()
    this.options = new OptionApi()
  }

  get locale() {
    return this._locale
  }

  set locale(value) {
    this._locale = value
    this.items.locale = value
    this.itemGroups.locale = value
    this.optionGroups.locale = value
    this.options.locale = value
  }
}

export default {
  install (Vue) {
    Vue.prototype.$api = new Api()
  }
}
