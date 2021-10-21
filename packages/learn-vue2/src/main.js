import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
require('dotenv').config()
// require('dotenv').config({path: __dirname + '/.env'})
// const path = require('path')
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
// require('dotenv').config({ path: '../.env' })
// require('dotenv').config({ path: '..\\.env' })

// const dotenv = require('dotenv');
// dotenv.config({ path: '../.env' });


console.log('.env config',require('dotenv').config());
console.log('main.js process.env',process.env)
console.log('main.js process.env.PASSWORD',process.env.PASSWORD)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
