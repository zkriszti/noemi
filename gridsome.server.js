// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(async ({ graphql, createPage }) => {
    // CREATE CUSTOM PAGES
    const { data } = await graphql(`{
      allCustomPage {
        edges {
          node {
            id
            slug
          }
        }
      }

      allBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }`)

    data.allCustomPage.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: './src/templates/CustomPage.vue',
        context: {
          id: node.id
        }
      })
    })

    /* // CREATE POST PAGES
    const { postData } = await graphql(`{
      allBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }`) */

    data.allBlogPost.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: './src/templates/BlogPost.vue',
        context: {
          id: node.id
        }
      })
    })
  })
}
