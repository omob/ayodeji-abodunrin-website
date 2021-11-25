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

function WorkHistory(props) {
  return (
    <Layout>
      <SEO
        title="Work History"
        description="Software Engineer - Ayodeji Abodunrin Work Work History"
      />
      <Container>
        {" "}
        <PageTitle>Work History</PageTitle>
      </Container>
    </Layout>
  );
}

export default WorkHistory;
