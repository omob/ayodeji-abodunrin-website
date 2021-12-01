import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import useWindowDimensions from "./../hooks/useWindowDimensions";
import Header from "./header";
import SideBar from "./sidebar";
import { GlobalStyles } from "./theme/global";
import { darkTheme } from "./theme/theme";
import uiTheme from "./theme/uiTheme";
import ToggleSidebarButton from "./toggle/toggle-sidebar";

const MainWraper = styled.div`
  display: grid;
  grid-template-columns: 300px auto;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [theme, setTheme] = useState(uiTheme.DARK);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width > 768) {
      return setIsSidebarOpen(true);
    }

    setIsSidebarOpen(false);
  }, [width, height]);

  // const loadTheme = () => {
  //   const storedTheme = storage.getTheme();
  //   if (!storedTheme) return setTheme(uiTheme.DARK);

  //   setTheme(storedTheme);
  // };

  // useEffect(() => {
  //   loadTheme();
  // }, []);

  // const toggleTheme = () => {
  //   if (theme === uiTheme.LIGHT) {
  //     setTheme(uiTheme.DARK);
  //     storage.save(uiTheme.DARK);
  //   } else {
  //     setTheme(uiTheme.LIGHT);
  //     storage.save(uiTheme.LIGHT);
  //   }
  // };

  const handleMenuBarToggle = isToggled => {
    setIsSidebarOpen(isToggled);
  };

  const handleCloseSidebar = () => {
    if (width < 768 && isSidebarOpen) setIsSidebarOpen(false);
  };

  console.log(width, height);
  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainWraper>
          <>
            <ToggleSidebarButton
              onToggled={handleMenuBarToggle}
              closeButton={!isSidebarOpen}
            ></ToggleSidebarButton>
            <SideBar isOpen={isSidebarOpen}></SideBar>
          </>
          <main onClick={handleCloseSidebar}>{children}</main>
        </MainWraper>
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
