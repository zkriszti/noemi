// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueMq from 'vue-mq'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add a meta tag
  head.meta.push({
    name: 'description',
    content: 'Noemi Mate | Digital Marketing & SEO Consultant from Budapest, Hungary'
  })

  head.htmlAttrs = { style: 'scroll-behavior: smooth' }

  router.options.scrollBehavior = (to, from, savedPosition) => {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 130 }
      }
    }
  }

  Vue.use(VueMq, {
    breakpoints: {
      xs: 449,
      sm: 767,
      md: 1023,
      lg: Infinity,
    }
  })
}
