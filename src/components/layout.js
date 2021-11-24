import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./header";
import SideBar from "./sidebar";
import storage from "./storage-layer";
import { GlobalStyles } from "./theme/global";
import { darkTheme, lightTheme } from "./theme/theme";
import uiTheme from "./theme/uiTheme";

const MainWraper = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
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

  const [theme, setTheme] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const loadTheme = () => {
    const storedTheme = storage.getTheme();
    if (!storedTheme) return setTheme(uiTheme.DARK);

    setTheme(storedTheme);
  };

  useEffect(() => {
    loadTheme();
  }, []);

  const toggleTheme = () => {
    if (theme === uiTheme.LIGHT) {
      setTheme(uiTheme.DARK);
      storage.save(uiTheme.DARK);
    } else {
      setTheme(uiTheme.LIGHT);
      storage.save(uiTheme.LIGHT);
    }
  };

  return (
    <ThemeProvider theme={theme === uiTheme.LIGHT ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainWraper>
          <SideBar />
          <main>{children}</main>
        </MainWraper>
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
