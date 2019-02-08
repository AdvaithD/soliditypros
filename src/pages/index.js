import React from "react";
import { Link } from "react-location";
import styled from "styled-components";

import {
  Section,
  Pane,
  Box,
  P,
  Heading,
  Small,
  Avatar
} from "components/Styles";

const Info = styled(Small)`
  font-style: italic;
`;

const Description = styled(P)`
  margin: 0;
`;

export default () => (
  <div>
    <Section>
      <Pane>
        <Box>
          <Avatar />
        </Box>
        <Box
          style={{
            width: "300px"
          }}
        >
          <P>A blog about Javascript, React, and Front End Programming</P>
        </Box>
      </Pane>
    </Section>
    <Section>
      <Heading>
        <Link to="blog/react-hooks-the-rebirth-of-state-management">
          React Hooks, the rebirth of State Management and beyond.
        </Link>
      </Heading>
      <Info>February 8, 2019</Info>
      <Description style={{}}>
        In late 2018 React Hooks were announced, and within minutes, I knew they
        would change everything.
      </Description>
    </Section>
  </div>
);
