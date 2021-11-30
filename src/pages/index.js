import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";
import {
  SectionWrapper,
  SocialLinkWrapper,
  HeadingText,
} from "../components/common";

const HomePageContent = styled(SectionWrapper)`
  padding-top: 7em;
  padding-bottom: 5em;
`;

const BodyText = styled.p`
  text-align: center;
  }
`;

const SocialLink = ({ label, url }) => {
  return (
    <SocialLinkWrapper>
      <a href={url}>{label}</a>
    </SocialLinkWrapper>
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="Home"
        description="Software Engineer - Ayodeji Abodunrin Personal Website"
      />
      <HomePageContent>
        <HeadingText>
          {" "}
          Hi, <span>I'm Ayo! </span>
        </HeadingText>
        <BodyText>
          I am a Software Engineer and a Solution provider with over 5 years of
          professional experience. I have worked with React, Node.js, React
          Native (Expo), .Net Core, and C#. I also have experience in UI/UX
          design using Figma tools. I have a Master’s degree in Information
          Technology from the University of Lagos, Nigeria and a BSc in Computer
          Science.{" "}
          <span>
            I{" "}
            <span role="img" aria-label="love">
              &#128151;
            </span>{" "}
            building solutions that facilitates business processes and makes
            users' life easier!{" "}
          </span>
          <span role="img" aria-label="smiley">
            &#128522;
          </span>
        </BodyText>
        <div style={{ textAlign: "center" }}>
          <SocialLink label="LinkedIn" url="http://www" />
          <SocialLink label="Github" url="http://www" />
          <SocialLink label="Email" url="http://www" />
        </div>
      </HomePageContent>
    </Layout>
  );
};

export default IndexPage;
