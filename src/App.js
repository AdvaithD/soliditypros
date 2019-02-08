import React from "react";
import { Root, Routes } from "react-static";
import { ThemeProvider } from "styled-components";
import { MDXProvider } from "@mdx-js/tag";
//
import theme from "utils/theme";
import Header from "components/Header";
import Footer from "components/Footer";
import useLocalStorage from "hooks/useLocalStorage";
import {
  GlobalStyles,
  Viewport,
  Content,
  Heading,
  SubHeading,
  P,
  Img,
  Blockquote,
  Ul,
  Code,
  InlineCode
} from "components/Styles";
import "modern-normalize/modern-normalize.css";

const components = {
  h1: Heading,
  h2: SubHeading,
  h3: SubHeading,
  h4: SubHeading,
  p: P,
  img: Img,
  blockquote: Blockquote,
  ul: Ul,
  code: Code,
  inlineCode: InlineCode
};

function Theme() {
  const [isDark, setIsDark] = useLocalStorage("theme", false);
  return (
    <ThemeProvider theme={isDark ? theme.dark : theme.light}>
      <MDXProvider components={components}>
        <React.Fragment>
          <GlobalStyles />
          <Viewport>
            <Header onToggleDark={() => setIsDark(old => !old)} />
            <Content>
              <Routes />
            </Content>
            <Footer />
          </Viewport>
        </React.Fragment>
      </MDXProvider>
    </ThemeProvider>
  );
}

function App() {
  return (
    <Root>
      <Theme />
    </Root>
  );
}

export default App;
