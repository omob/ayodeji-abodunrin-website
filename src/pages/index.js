import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

export const HeaderTitle = styled.h2`
  font-size: 6em;
  @media (max-width: 768px) {
    & {
      font-size: 5em;
    }
  }
`;
export const SectionWrapper = styled.section`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 4em;
  padding-bottom: 4em;

  p {
    font-weight: 300;
  }
`;
export const HeadingText = styled(HeaderTitle)`
  font-size: 4em;
  text-align: center;
  margin-bottom: 40px;

  span {
    background: ${({ theme }) => theme.colors.secondaryGradient};
    box-shadow: 0px 4px 4px 0px hsla(0, 0%, 0%, 0.25);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
  }
  @media (max-width: 768px) {
    & {
      font-size: 3em;
    }
  }
`;

const HomePageContent = styled(SectionWrapper)`
  padding-top: 7em;
  padding-bottom: 5em;
`;

const BodyText = styled.p`
  text-align: center;
`;

export const SocialLinkWrapper = styled.button`
  background-color: transparent;
  border: 2px solid #f17325;
  border-radius: 30px;
  font-size: 14px;
  text-align: center;
  color: #f2994a;
  min-width: 80px;
  margin: 0px 5px;
  font-weight: bold;
  a {
    text-decoration: none;
    color: inherit;
  }

  & :hover {
    background-color: #f17325;
    color: #fff;
    transition: 0.3s;
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
      <SEO
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
          Science. I love building solutions that facilitates business processes
          and makes users' life easier!{" "}
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
