import DefineVue from './components/defineVue/defineVue.vue'

module.exports = {
	install: function(Vue, options) {
		Vue.component('df-vue', DefineVue);
	}
}
