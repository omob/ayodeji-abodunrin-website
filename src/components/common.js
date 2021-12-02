import styled from "styled-components";

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
    font-size: 1.2em;
    line-height: 1.6em;
  }
`;
export const HeadingText = styled(HeaderTitle)`
  font-size: 4em;
  text-align: center;
  margin-bottom: 40px;

  span {
    background: ${({ theme }) => theme.colors.secondaryGradient};
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


export const NoData = styled.p`
  line-height: 1.5em;
`;