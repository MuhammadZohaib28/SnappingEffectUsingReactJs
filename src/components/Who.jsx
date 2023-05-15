import React from "react";
import { styled } from "styled-components";

const Section = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
`;

const Who = () => {
  return (
    <Section>
      <h3>Who Section</h3>
    </Section>
  );
};

export default Who;
