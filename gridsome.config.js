// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const siteData = require("./src/content/sitedata.json")

// add .styl files in assets folder globally to all components: (see also module.exports chainWebpack)
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/*.styl')
      ],
    })
}

module.exports = {
  siteName: siteData['Site Name'],

  port: 8900,

  transformers: {
    remark: {
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./src/content/pages/*.md",
        typeName: "FrontPageItem"
      }
    },

    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./src/content/blog/*.md",
        typeName: "BlogPost"
      }
    }
  ],

  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('stylus').oneOf(type))
    })
  }
}
