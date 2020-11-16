import React from 'react';
import { PrimaryHeading, DescriptionText } from './styled';

export default function Header({ heading, description }) {
  return (
    <>
      <PrimaryHeading>{heading}</PrimaryHeading>
      <DescriptionText>{description}</DescriptionText>
    </>
  );
}
