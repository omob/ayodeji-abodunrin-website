import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {
  SectionWrapper,
  SocialLinkWrapper,
  HeadingText,
} from "../components/common";

const HomePageContent = styled(SectionWrapper)`
  padding-top: 7em;
  padding-bottom: 5em;
  text-align: center;
  margin: auto;

  @media (min-width: 1500px) {
    width: 90%;
    margin: auto;
  }

  @media (max-width: 768px) {
    padding-top: 4em;
  }
`;

const BodyText = styled.p`
  text-align: center;

  span.portfolio a {
    color: inherit;
    padding: 2px;
    font-style: italic;
  }
`;

const SocialLink = ({ label, url, ...otherProps }) => {
  return (
    <SocialLinkWrapper>
      <a href={url} {...otherProps}>
        {label}
      </a>
    </SocialLinkWrapper>
  );
};

const UserImageWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 2em;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="Home"
        description="Software Engineer - Ayodeji Abodunrin Personal Website"
      />
      <HomePageContent>
        <UserImageWrapper>
          <StaticImage
            src={"../images/profile.png"}
            alt={" Ayodeji Abodunrin"}
            layout="constrained"
            height={120}
            quality={100}
          />
        </UserImageWrapper>
        <HeadingText>
          {" "}
          Hi, <span>I'm Ayo! </span>
        </HeadingText>
        <BodyText>
          I am a software engineer and a solutions provider with over five (5)
          years of professional experience. I have worked with React, Node.js,
          React Native (Expo),.Net Core, and C# programming languages and
          libraries/frameworks alike. I also have experience in UI/UX design
          using Figma tools. I have a Master’s degree in Information Technology
          from the University of Lagos, Nigeria and a BSc in Computer Science. I{" "}
          <span role="img" aria-label="love">
            &#128151;
          </span>{" "}
           building solutions that facilitate business processes and make users'
          lives easier! 
          <span role="img" aria-label="smiley">
            &#128522;
          </span>
          .{" "}
          <span className="portfolio">
            <Link to="/portfolio" aria-label="portfolio">
              Click to view my portfolio{" "}
            </Link>{" "}
          </span>
        </BodyText>
        <div style={{ textAlign: "center" }}>
          <SocialLink
            label="LinkedIn"
            target="_blank"
            url="https://www.linkedin.com/in/abodunrinayodeji/"
          />
          <SocialLink
            label="Github"
            target="_blank"
            url="https://github.com/omob"
          />
          <SocialLink
            label="Email"
            target="_blank"
            url="mailto:aboayosam@gmail.com"
          />
        </div>
      </HomePageContent>
    </Layout>
  );
};

export default IndexPage;
