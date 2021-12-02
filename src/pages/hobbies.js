import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { SectionWrapper } from "../components/common";
import styled from "styled-components";
import { NoData } from "./../components/common";

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

function Hobbies(props) {
  return (
    <Layout>
      <Seo
        title="Hobbies"
        description="Software Engineer - Ayodeji Abodunrin Hobbies"
      />
      <Container>
        {" "}
        <PageTitle>Outside Programming....</PageTitle>
        <NoData>
          Please check back later...{" "}
          <span role="img" aria-label="smiley">
            &#128522;
          </span>
        </NoData>
      </Container>
    </Layout>
  );
}

export default Hobbies;
