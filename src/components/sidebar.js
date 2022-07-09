import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserInfo from "./userInfo";

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
  a.active {
    background: linear-gradient(180deg, #ff732d 0%, #ef5337 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

const navUrls = [
  {
    url: "/",
    label: "Intro",
  },
  {
    url: "/portfolios",
    label: "Portfolios",
  },
  {
    url: "/blogs",
    label: "Blog",
  },
  {
    url: "/work-history",
    label: "Work history",
  },
  {
    url: "/hobbies",
    label: "Hobbies",
  },
];

const SideBar = ({ isOpen = true }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setLocation(window.location);
    }
  }, []);

  return (
    <Root>
      <SideNavWrapper isOpen={isOpen}>
        <TopBarLink>
          <h3>Menu </h3>
          {navUrls.map(({ label, url }) => (
            <Link
              key={label}
              to={url}
              className={
                location?.pathname === url ||
                location?.pathname.includes(label.toLowerCase())
                  ? "active"
                  : null
              }
            >
              {label}
            </Link>
          ))}
        </TopBarLink>
        <Divider />
        <UserInfo />
      </SideNavWrapper>
    </Root>
  );
};

export default SideBar;
