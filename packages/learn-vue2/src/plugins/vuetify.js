// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const opts = {
  // rtl: true,
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  theme: {
    themes: {
      light:

      {
        primary: "#ffc107",
        secondary: "#607d8b",
        accent: "#ff5722",
        error: "#ffeb3b",
        warning: "#9c27b0",
        info: "#4caf50",
        success: "#8bc34a"
      },
      dark: {
        primary: colors.blue.darken3,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },

    }
  }
}

export default new Vuetify(opts)