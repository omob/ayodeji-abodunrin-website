import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Project from "../components/project";
import Seo from "../components/seo";
import { SectionWrapper } from "../components/common";

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
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function PortfolioPage({ data }) {
  const portfolios = data.portfolios.nodes;
  return (
    <Layout>
      <Seo
        title="Portfolios"
        description="Software Engineer - Ayodeji Abodunrin Portfolio Page"
      />
      <PortfolioPageWrapper>
        <PageTitle>Portfolios </PageTitle>
        <ProjectsWrapper>
          {portfolios.map(({ frontmatter, id }) => (
            <Project
              key={id}
              title={frontmatter.title}
              slug={frontmatter.slug}
              stack={frontmatter.stack}
              stackImage={frontmatter.stackImage}
              thumbnail={frontmatter.thumbnail}
              type={"portfolios"}
            />
          ))}
        </ProjectsWrapper>
      </PortfolioPageWrapper>
    </Layout>
  );
}

export default PortfolioPage;

export const query = graphql`
  {
    portfolios: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "portfolios" } } }
      sort: { fields: frontmatter___postedDate, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          type
          stackImage {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                height: 20
              )
            }
          }
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
