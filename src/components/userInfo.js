import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Root = styled.div`
  text-align: center;
`;

const UserName = styled.h2`
  font-size: 22px;
  margin-bottom: 5px;
  margin-top: 0.5em;
`;

const Profession = styled.h3`
  font-weight: bold;
  background: ${({ theme }) => theme.colors.secondaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 5px;
  font-size: 26px;
  letter-spacing: 2px;

  @media (max-width: 550px) {
    font-size: 24px;
  }
`;

const ContactInfo = styled.div`
  position: relative;
  top: 50px;
  width: 100%;
  text-align: center;
  padding-bottom: 1em;
  p {
    line-height: 1.5em;
    font-size: 14px;
    width: 80%;
    margin: auto;
    margin-bottom: 10px;
  }

  a {
    color: inherit;
    font-size: 12px;
    display: block;
    font-weight: 300;
    line-height: 1.6em;
  }

  @media (min-width: 1500px) {
    p {
      font-size: 16px;
      margin-bottom: 20px;
    }
    a {
      font-size: 14px;
    }
  }
`;

const UserInfo = () => {
  const userName = "Ayodeji Abodunrin";
  const userProfession = "Software Engineer";

  return (
    <Root>
      <StaticImage
        src={"../images/profile.png"}
        alt={userName}
        layout="constrained"
        height={100}
        quality={100}
      />
      <UserName>{userName}</UserName>
      <Profession>{userProfession}</Profession>
      <StaticImage
        src={"../images/prog-languages.svg"}
        alt="Languages"
        layout="constrained"
        height={40}
        quality={100}
      />

      <ContactInfo>
        <p>
          You have a project in mind or something better{" "}
          <span role="img" aria-label="smiley">
            &#128522;
          </span>
          ?
        </p>
        <a href="mailto:aboayosam@gmail.com">Email: aboayosam@gmail.com</a>
        <a href="tel:+2348153706096">Call: +234(0)8153706096</a>
        <a href="https://www.linkedin.com/in/abodunrinayodeji/">
          LinkedIn: abodunrinayodeji
        </a>
      </ContactInfo>
    </Root>
  );
};

export default UserInfo;
