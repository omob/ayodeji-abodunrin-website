import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";

const SectionWrapper = styled.section`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 4em;
  padding-bottom: 4em;

  h4 {
    font-weight: normal;
  }
  p {
    font-weight: 300;
    font-size: 1.2em;
    line-height: 1.6em;
  }

  ul li {
    font-weight: 300;
    line-height: 1.5em;
  }

  a {
    color: inherit;
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

    @media (max-width: 768px) {
      font-size: 3em;
    }
  }
`;
const Content = styled(SectionWrapper)`
  padding-top: 0;
  height: contain;
  font-size: 16px;

  table td {
    font-size: 14px;
    line-height: 1.2;
  }

  @media (min-width: 768px) {
    table td {
      font-size: 18px;
      line-height: 1.5;
    }
  }

  code {
    background-color: #2c1d1d;
  }
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

const BlogDetail = ({ data: { blog } }) => {
  return (
    <Layout>
      <Seo title={blog.frontmatter.title} />

      <HeaderBanner>
        <h1>{blog.frontmatter.title}</h1>
        <BreadCrumbs>
          <Link to="/">Home</Link> {">"} <Link to="/blogs"> Blogs </Link>
          {">"} {blog.frontmatter.title}
        </BreadCrumbs>
      </HeaderBanner>
      <Content dangerouslySetInnerHTML={{ __html: blog.html }} />
    </Layout>
  );
};

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        stack
        title
      }
      html
    }
  }
`;

export default BlogDetail;
