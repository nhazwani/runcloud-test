import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMoon)
library.add(faSearch)
library.add(faLongArrowAltLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
	render: h => h(App)
}).$mount('#app')
