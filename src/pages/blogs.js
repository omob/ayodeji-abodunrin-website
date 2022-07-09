import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Project from "../components/project";
import Seo from "../components/seo";
import { SectionWrapper } from "../components/common";
import { NoData } from "./../components/common";
import { PropTypes } from "prop-types";

const PortfolioPageWrapper = styled(SectionWrapper)`
  padding-top: 1em;
  padding-bottom: 5em;
  @media (min-width: 768px) {
    max-width: 800px;
  }
  @media (min-width: 900px) {
    max-width: 100%;
  }
`;

const PageTitle = styled.h2`
  background: ${({ theme }) => theme.colors.secondaryGradient};
  font-size: 48px;
  padding: 15px 0;
  line-height: 0.9em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function BlogPage({ data }) {
  const blogs = data.blogs.nodes;
  return (
    <Layout>
      <Seo
        title="News, Events, and Trainings"
        description="Software Engineer - Ayodeji Abodunrin Portfolio Page"
      />
      <PortfolioPageWrapper>
        <PageTitle>News & Trainings </PageTitle>

        {blogs && blogs.length === 0 && (
          <NoData>
            Please check back later...{" "}
            <span role="img" aria-label="smiley">
              &#128522;
            </span>
          </NoData>
        )}

        <ProjectsWrapper>
          {blogs.map(({ frontmatter, id }) => (
            <Project
              key={id}
              title={frontmatter.title}
              thumbnail={frontmatter.thumbnail}
              slug={frontmatter.slug}
              type={"blogs"}
            />
          ))}
        </ProjectsWrapper>
      </PortfolioPageWrapper>
    </Layout>
  );
}

export default BlogPage;

export const query = graphql`
  {
    blogs: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "blogs" } } }
      sort: { fields: frontmatter___postedDate, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          title
          type
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                quality: 100
              )
            }
          }
        }
        id
      }
    }
  }
`;
