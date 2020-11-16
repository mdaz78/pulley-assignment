import React from 'react';
import Back from '../assets/back.png';
import styled from 'styled-components';
import { StyledLink, DescriptionText } from '../components/styled';

const StyledLinkWrapper = styled(StyledLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.8rem;
  width: fit-content;
`;

const CustomDescriptionText = styled(DescriptionText)`
  margin: 0;
  padding-left: 0.9rem;
  color: #9f9f9f;
  font-weight: 600;
`;

export default function BackButton() {
  return (
    <StyledLinkWrapper to='/'>
      <img src={Back} alt='Back' />
      <CustomDescriptionText>Upload Investment Documents</CustomDescriptionText>
    </StyledLinkWrapper>
  );
}
