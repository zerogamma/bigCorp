import React from "react";
import { ThemeProvider } from 'styled-components'
import {
    LayoutContainer,
    MainContent
} from './style';
import GlobalStyles from "../../utils/style/GlobalStyle";
import theme from "../../utils/style/theme";
import Footer from "../footer"

const MainContainer = ({children}) => (
    <ThemeProvider theme={theme}>
         <GlobalStyles />
        <LayoutContainer>
        <MainContent>
          {children}
        </MainContent>
        <Footer />
        </LayoutContainer>
      </ThemeProvider>
    )

export default MainContainer;