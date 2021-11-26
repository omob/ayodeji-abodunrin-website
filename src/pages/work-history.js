import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SectionWrapper } from "./index";
import styled from "styled-components";
import { graphql } from "gatsby";

const Container = styled(SectionWrapper)`
  padding-top: 1em;
  padding-bottom: 5em;
`;

const PageTitle = styled.h2`
  font-size: 48px;
  background: ${({ theme }) => theme.colors.secondaryGradient};
  padding: 15px 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Content = styled(SectionWrapper)`
  padding-top: 0;
  height: contain;
  font-size: 16px;
`;

const ExperienceWrapper = styled.div`
  margin-top: 2em;
  h3 {
    margin-bottom: 0;
    font-weight: normal;
  }
`;

const ExperienceContent = styled.div`
  p,
  li {
    font-size: 18px;
    font-weight: 300;
  }
`;

const ExperienceDate = styled.p`
  font-size: 12px !important;
  color: gray;
  margin-bottom: 0px;
`;

const Role = styled.p`
  font-size: 14px !important;
  color: hsla(0, 0%, 61%, 1);
  margin-bottom: 0px;
`;

const Divider = styled.div`
  height: 1px;
  background: #393939;
  margin: 10px 0;
`;
function WorkHistory({ data }) {
  const experiences = data.experience.nodes;
  return (
    <Layout>
      <SEO
        title="Work History"
        description="Software Engineer - Ayodeji Abodunrin Work Work History"
      />
      <Container>
        {" "}
        <PageTitle>Relevant Experience</PageTitle>
        <Content>
          {experiences.map(({ frontmatter, id, html }) => (
            <ExperienceWrapper key={id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3>{frontmatter.company}</h3>
                <ExperienceDate>{frontmatter.date}</ExperienceDate>
              </div>
              <Role> {frontmatter.role} </Role>
              <Divider />
              <ExperienceContent dangerouslySetInnerHTML={{ __html: html }} />
            </ExperienceWrapper>
          ))}
        </Content>
      </Container>
    </Layout>
  );
}

export default WorkHistory;

export const query = graphql`
  {
    experience: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "experience" } } }
    ) {
      nodes {
        frontmatter {
          company
          date
          role
        }
        html
      }
    }
  }
`;
