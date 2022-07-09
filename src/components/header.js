import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.body};
`;

const NavBar = styled.nav`
  margin: 0 auto;
  max-width: 1280px;
  padding: 10px;
  display: grid;
  grid-template-columns: auto;
  justify-items: end;
  height: 80px;

  @media (max-width: 768px) {
    visibility: hidden;
  }
`;

const TopBarLink = styled.div`
  padding: 20px;
  a {
    margin: 2em;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    font-weight: bold;
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

  @media (max-width: 850px) {
    a {
      margin: 1em;
      font-size: 14px;
    }
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

const Header = ({ siteTitle }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setLocation(window.location);
    }
  }, []);

  return (
    <HeaderWrapper>
      <NavBar>
        <TopBarLink>
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
      </NavBar>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
