import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SectionWrapper } from "./index";
import styled from "styled-components";

const Container = styled(SectionWrapper)`
  padding-top: 1em;
  padding-bottom: 5em;
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
        <h2>Outside Programming....</h2>
      </Container>
    </Layout>
  );
}

export default Hobbies;
