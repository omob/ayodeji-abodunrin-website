import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { SocialLinkWrapper } from "../components/common";

const ProjectItem = styled.div`
  position: relative;
  padding: 20px;
  width: 350px;
  background-color: #0a0a0a;
  margin-bottom: 2em;

  @media (min-width: 768px) {
    width: 350px;
  }

  @media (min-width: 1320px) {
    width: 260px;
  }
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
  z-index: 10;
  right: 20px;
  top: 20px;

  @media (min-width: 1320px) {
    right: 10px;
    top: 10px;
  }
`;

const Project = ({ title, stack, slug, type, stackImage, thumbnail }) => {
  return (
    <ProjectItem>
      {stack && (
        <ProjectStack>
          <GatsbyImage image={getImage(stackImage)} alt={stack} />
        </ProjectStack>
      )}
      <GatsbyImage image={getImage(thumbnail)} alt={title} />
      <ProjectTitle>{title} </ProjectTitle>
      <ProjectLinkButton>
        <Link to={`/${type}/${slug}`}>Details</Link>
      </ProjectLinkButton>
    </ProjectItem>
  );
};

export default Project;
