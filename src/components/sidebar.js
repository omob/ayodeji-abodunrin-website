import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import UserInfo from "./userInfo";

const Root = styled.div`
  position: relative;
`;

const SideNavWrapper = styled.div`
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.dark};
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-340px)"};
  transition: 0.7s;
  top: 0;
  bottom: 0;
  align-items: center;
  padding-top: 6em;
  @media (max-width: 550px) {
    & {
      width: 250px;
    }
  }

  @media screen and (max-height: 550px) {
    & {
      overflow: scroll;
    }
  }
`;

const SideBar = ({ isOpen = true }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <Root>
      <SideNavWrapper isOpen={isOpen}>
        <UserInfo />
      </SideNavWrapper>
    </Root>
  );
};

export default SideBar;
