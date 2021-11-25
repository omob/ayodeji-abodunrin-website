import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SectionWrapper } from "./index";
import styled from "styled-components";

const Container = styled(SectionWrapper)`
  padding-top: 1em;
  padding-bottom: 5em;
`;

const PageTitle = styled.h2`
  background: ${({ theme }) => theme.colors.secondaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Hobbies(props) {
  return (
    <Layout>
      <SEO
        title="Hobbies"
        description="Software Engineer - Ayodeji Abodunrin Hobbies"
      />
      <Container>
        {" "}
        <PageTitle>Outside Programming....</PageTitle>
      </Container>
    </Layout>
  );
}

export default Hobbies;
