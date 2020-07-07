import DefineVue from './components/defineVue/defineVue.vue'
import AddressChoose from './components/addressChoose/addressChoose.vue'

module.exports = {
  install: function(Vue, options) {
    Vue.component('df-vue', DefineVue);
    Vue.component('address-choose', AddressChoose);
  }
}
