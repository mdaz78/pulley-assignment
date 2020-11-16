import React from 'react';
import styled from 'styled-components';
import { Separator } from './styled';

const Container = styled.section`
  display: grid;
  grid-template-columns: 12.6% 3.5% 83.9%;
  align-items: center;
  gap: 0.5rem;
`;

const StyledP = styled.p`
  justify-self: center;
  font-size: 1.3rem;
`;

export default function OrSeparator() {
  return (
    <Container>
      <Separator />
      <StyledP>Or</StyledP>
      <Separator />
    </Container>
  );
}
