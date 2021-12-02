import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import UserInfo from "./userInfo";
import { Link } from "gatsby";

const Root = styled.div`
  position: relative;
`;

const SideNavWrapper = styled.div`
  width: 300px;
  height: 100%;
  position: fixed;

  z-index: 1000;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.dark};
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-340px)"};
  transition: 0.7s;
  top: 0;
  bottom: 0;
  align-items: center;
  padding-top: 2em;
  @media (max-width: 550px) {
    & {
      width: 260px;
      overflow-y: scroll;
    }
  }

  @media (min-width: 768px) {
    padding-top: 6em;
  }

  @media screen and (max-height: 550px) {
    & {
      overflow: scroll;
    }
  }
`;

const TopBarLink = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  padding: 10px;
  padding-bottom: 1em;
  padding-left: 20px;
  text-align: left;

  h3 {
    margin-bottom: 10px;
    background: ${({ theme }) => theme.colors.secondaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  a {
    margin-right: 20px;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    line-height: 1.7em;
    display: block;
    letter-spacing: 1px;
  }

  a:hover {
    background: linear-gradient(180deg, #ff732d 0%, #ef5337 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Divider = styled.div`
  background: ${({ theme }) => theme.bodyBg};
  height: 2px;
  margin-bottom: 3em;

  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SideBar = ({ isOpen = true }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <Root>
      <SideNavWrapper isOpen={isOpen}>
        <TopBarLink>
          <h3>Menu </h3>
          <Link to="/">Intro</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/work-history">Experience</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/hobbies">Hobbies</Link>
        </TopBarLink>
        <Divider />
        <UserInfo />
      </SideNavWrapper>
    </Root>
  );
};

export default SideBar;
