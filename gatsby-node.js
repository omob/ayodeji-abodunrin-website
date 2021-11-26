const path = require("path");

// create pages individually
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      projects: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.projects.nodes.forEach(project => {
    createPage({
      path: `/projects/${project.frontmatter.slug}`,
      component: path.resolve(`src/templates/project-detail.js`),
      context: {
        slug: project.frontmatter.slug,
      },
    });
  });
};
