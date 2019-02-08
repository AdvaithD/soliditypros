import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/languages/hljs/javascript";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/styles/hljs";
//
import profileImg from "media/profile.jpg";

SyntaxHighlighter.registerLanguage("javascript", js);

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-size: 18px;
    line-height: 24px;
    min-height: 100vh;
    background: ${props => props.theme.background};
    color: ${props => props.theme.foreground};
    display: flex;
    flex-direction: column;
    transition: all .2s ease-out;
  }

  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.primary};
  }
`;

export const Viewport = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  padding: 2rem ${props => props.theme.gutter};
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > .logo {
    text-decoration: none;
    font-size: 1.75rem;
    font-weight: bold;
  }
`;

export const Footer = styled.div`
  background: ${props => props.theme.secondary};
  color: white;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  a {
    color: white;
  }

  > * {
    margin: 0.25rem 0.5rem;
  }
`;

export const Heading = styled.h1`
  font-size: 2rem;
  line-height: 2.2rem;
  margin: 0.5rem 0;
`;

export const SubHeading = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 0.5rem 0;
`;

export const P = styled.p`
  margin: 2em 0;
  line-height: 1.75;
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
`;

export const Blockquote = styled.div`
  padding-left: 1rem;
  margin-left: -1rem;
  box-shadow: -4px 0 0 ${props => props.theme.foreground};
  font-style: italic;
`;

export const Ul = styled.ul`
  line-height: 1.75;
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 ${props => props.theme.gutter};
`;

export const Section = styled.section`
  margin-bottom: 2rem;
`;

export const Pane = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: true;
`;

export const Box = styled.div``;

export const Small = styled.span`
  font-size: 0.8em;
`;

export const ThemeToggle = styled.button`
  appearance: none;
  background: ${props =>
    props.theme.dark ? props.theme.secondary : props.theme.yellow};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  border: 0;
  cursor: pointer;
  box-shadow: 0 0 0 2px ${props => props.theme.foreground};
  transition: all 0.3s ease;
  outline: none;
`;

export const Avatar = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 200px;
  margin-right: 1rem;
  background-image: url(${profileImg});
  background-size: cover;
  border: 3px solid ${props => props.theme.foreground};
  transition: all 0.5s ease;
`;

const Highlighter = styled(SyntaxHighlighter)`
  padding: 1rem !important;
  border-radius: 1rem;

  code {
    font-size: 0.85rem;
    line-height: 1.5;
  }
`;

export const Code = ({ children }) => (
  <Highlighter language="javascript" style={tomorrowNightBright}>
    {children}
  </Highlighter>
);

export const InlineCode = styled.code`
  border-radius: 0.3em;
  padding: 0.15em 0.2em 0.05em;
  white-space: normal;
  background: ${props => props.theme.tint};
  color: ${props => props.theme.foreground};
`;
