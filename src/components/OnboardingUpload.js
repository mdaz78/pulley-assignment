import React from 'react';
import styled from 'styled-components';
import { Card, SecondaryHeading, DescriptionText } from './styled';

export default function OnboardingUpload({ icon, heading, description }) {
  const StyledImage = styled.img`
    justify-self: center;
  `;

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
