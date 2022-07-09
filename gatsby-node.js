const path = require("path");

const availableTypesWithPages = ["portfolios", "blogs"];

// create pages individually
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      portfolios: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            type
          }
        }
      }
    }
  `);

  data.portfolios.nodes.forEach(portfolio => {
    const type = portfolio.frontmatter.type;
    if (!availableTypesWithPages.includes(type)) return;
    createPage({
      path: `/${type}/${portfolio.frontmatter.slug}`,
      component: path.resolve(`src/templates/${type}-detail.js`),
      context: {
        slug: portfolio.frontmatter.slug,
      },
    });
  });
};
