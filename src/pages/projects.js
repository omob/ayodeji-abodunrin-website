import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Layout from "./../components/layout";
import SEO from "./../components/seo";
import { SectionWrapper, SocialLinkWrapper } from "./index";
import { Link } from "gatsby";

const PortfolioPageWrapper = styled(SectionWrapper)`
  padding-top: 1em;
  padding-bottom: 5em;
`;

const ProjectItem = styled.div`
  position: relative;
  padding: 20px;
  width: 350px;
  background-color: #0a0a0a;
  margin-bottom: 2em;
`;

const ProjectTitle = styled.h2`
  font-size: 22px;
  margin: 10px;
`;

const ProjectLinkButton = styled(SocialLinkWrapper)`
  font-size: 12px;
  padding: 0;
  line-height: 20px;
`;

const ProjectStack = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function ProjectsPage(props) {
  return (
    <Layout>
      <SEO
        title="Projects"
        description="Software Engineer - Ayodeji Abodunrin Portfolio Page"
      />
      <PortfolioPageWrapper>
        <h2>Portfolios </h2>
        <ProjectsWrapper>
          <ProjectItem>
            <ProjectStack>
              <StaticImage
                src={"../images/portfolio/node_react.png"}
                alt={""}
                layout="constrained"
                height={20}
                quality={100}
              />
            </ProjectStack>
            <StaticImage
              src={"../images/portfolio/lms.png"}
              alt={""}
              layout="constrained"
              height={200}
              quality={100}
            />
            <ProjectTitle>A Learning Management System</ProjectTitle>
            <ProjectLinkButton>
              <Link to="/projects">Details</Link>
            </ProjectLinkButton>
          </ProjectItem>
          <ProjectItem>
            <ProjectStack>
              <StaticImage
                src={"../images/portfolio/node_react.png"}
                alt={""}
                layout="constrained"
                height={20}
                quality={100}
              />
            </ProjectStack>
            <StaticImage
              src={"../images/portfolio/lms.png"}
              alt={""}
              layout="constrained"
              height={200}
              quality={100}
            />
            <ProjectTitle>A Learning Management System</ProjectTitle>
            <ProjectLinkButton>
              <Link to="/projects">Details</Link>
            </ProjectLinkButton>
          </ProjectItem>

          <ProjectItem>
            <ProjectStack>
              <StaticImage
                src={"../images/portfolio/node_react.png"}
                alt={""}
                layout="constrained"
                height={20}
                quality={100}
              />
            </ProjectStack>
            <StaticImage
              src={"../images/portfolio/lms.png"}
              alt={""}
              layout="constrained"
              height={200}
              quality={100}
            />
            <ProjectTitle>A Learning Management System</ProjectTitle>
            <ProjectLinkButton>
              <Link to="/projects">Details</Link>
            </ProjectLinkButton>
          </ProjectItem>

          <ProjectItem>
            <ProjectStack>
              <StaticImage
                src={"../images/portfolio/node_react.png"}
                alt={""}
                layout="constrained"
                height={20}
                quality={100}
              />
            </ProjectStack>
            <StaticImage
              src={"../images/portfolio/lms.png"}
              alt={""}
              layout="constrained"
              height={200}
              quality={100}
            />
            <ProjectTitle>A Learning Management System</ProjectTitle>
            <ProjectLinkButton>
              <Link to="/projects">Details</Link>
            </ProjectLinkButton>
          </ProjectItem>
        </ProjectsWrapper>
      </PortfolioPageWrapper>
    </Layout>
  );
}

export default ProjectsPage;
