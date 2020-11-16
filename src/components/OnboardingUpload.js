import React from 'react';
import styled from 'styled-components';
import { Card, SecondaryHeading, DescriptionText } from './styled';

const StyledImage = styled.img`
  justify-self: center;
`;
export default function OnboardingUpload({ icon, heading, description }) {
  return (
    <Card>
      <StyledImage src={icon} alt='Upload type Spreadsheet' />
      <section>
        <SecondaryHeading>{heading}</SecondaryHeading>
        <DescriptionText>{description}</DescriptionText>
      </section>
    </Card>
  );
}
