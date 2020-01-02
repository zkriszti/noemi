// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueMq from 'vue-mq'

import '~/assets/fonts.styl'
import '~/assets/colors.styl'

// Load Montserrat typeface
require('typeface-montserrat')
// Load Open Sans typeface
require('typeface-open-sans')

// Set up FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faInstagram, faPinterest, faLinkedin, faCheck)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add a meta tag
  head.meta.push({
    name: 'description',
    content: 'Noemi Mate | Digital Marketing & SEO Consultant from Budapest, Hungary'
  })

  // Handle anchor scrolling
  head.htmlAttrs = { style: 'scroll-behavior: smooth' }

  router.options.scrollBehavior = (to, from, savedPosition) => {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 130 }
      }
    }
  }

  // Set media query breakpoints
  Vue.use(VueMq, {
    breakpoints: {
      xs: 449,
      sm: 767,
      md: 1023,
      lg: Infinity,
    }
  })

  // Use FontAwesome
  Vue.component('font-awesome', FontAwesomeIcon)
}
