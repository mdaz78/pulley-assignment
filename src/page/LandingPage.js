import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import OnboardingUpload from '../components/OnboardingUpload';
import OrSeparator from '../components/OrSeparator';
import { Wrapper, Separator } from '../components/styled';
import ExcelIcon from '../assets/excel.png';
import PaperIcon from '../assets/paper.png';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export default function LandingPage() {
  return (
    <>
      <Header
        heading='Let’s Create your Cap Table!'
        description='Select how you would like to create your cap table.'
      />
      <Wrapper>
        <StyledLink to='/document'>
          <OnboardingUpload
            icon={ExcelIcon}
            heading='Upload Spreadsheet'
            description='Download a cap table spreadsheet template, fill it out, upload the completed template.'
          />
        </StyledLink>
        <OrSeparator />
        <StyledLink to='/document'>
          <OnboardingUpload
            icon={PaperIcon}
            heading='Upload Investment Documents'
            description='Download a cap table spreadsheet template, fill it out, upload the completed template.'
          />
        </StyledLink>
      </Wrapper>
    </>
  );
}
