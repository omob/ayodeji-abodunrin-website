import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SectionWrapper } from "./index";
import styled from "styled-components";

const Container = styled(SectionWrapper)`
  padding-top: 1em;
  padding-bottom: 5em;
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
        <h2>Work History</h2>
      </Container>
    </Layout>
  );
}

export default WorkHistory;
