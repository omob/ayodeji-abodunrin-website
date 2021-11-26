import { graphql, Link } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const SectionWrapper = styled.section`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 4em;
  padding-bottom: 4em;

  p {
    font-weight: 300;
    font-size: 1.2em;
    line-height: 1.6em;
  }

  @media (max-width: 768px) {
    ${"" /* p {
      font-size: 1.26em;
    } */}
  }
`;

const HeaderBanner = styled(SectionWrapper)`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  h1 {
    font-size: 4em;
    margin-bottom: 0px;
    font-weight: bolder;
    ${"" /* background: ${({ theme }) => theme.colors.secondaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */}
  }
`;
const Content = styled(SectionWrapper)`
  padding-top: 0;
  height: contain;
  font-size: 16px;
`;

const BreadCrumbs = styled.div`
  color: gray;
  font-weight: 300;
  font-size: 1.2em;
  position: relative;
  top: 20px;
  a {
    color: inherit;
    transition: 0.5s ease;
  }

  a:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.bodyBg};
  }
`;

const ProjectDetail = ({ data: { project } }) => {
  return (
    <Layout>
      <SEO title={project.frontmatter.title} />

      <HeaderBanner>
        <h1>{project.frontmatter.title}</h1>
        <BreadCrumbs>
          <Link to="/">Home</Link> {">"} <Link to="/projects"> Projects </Link>
          {">"} {project.frontmatter.title}
        </BreadCrumbs>
      </HeaderBanner>
      <Content dangerouslySetInnerHTML={{ __html: project.html }} />
    </Layout>
  );
};

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        featuredImage
        slug
        stack
        title
      }
      html
    }
  }
`;

export default ProjectDetail;
