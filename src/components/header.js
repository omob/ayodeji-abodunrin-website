import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
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

  a:hover {
    background: linear-gradient(180deg, #ff732d 0%, #ef5337 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Header = ({ siteTitle }) => {
  return (
    <HeaderWrapper>
      <NavBar>
        <TopBarLink>
          <Link to="/">Intro</Link>
          {/* <Link to="/about">About</Link> */}
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/work-history">Work History</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/hobbies">Hobbies</Link>
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
