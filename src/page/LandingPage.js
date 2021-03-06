import React from 'react';
import Header from '../components/Header';
import OnboardingUpload from '../components/OnboardingUpload';
import OrSeparator from '../components/OrSeparator';
import { Wrapper, StyledLink } from '../components/styled';
import ExcelIcon from '../assets/excel.png';
import PaperIcon from '../assets/paper.png';

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
            tabIndex='0'
          />
        </StyledLink>
        <OrSeparator />
        <StyledLink to='/document'>
          <OnboardingUpload
            icon={PaperIcon}
            heading='Upload Investment Documents'
            description='Download a cap table spreadsheet template, fill it out, upload the completed template.'
            tabIndex='0'
          />
        </StyledLink>
      </Wrapper>
    </>
  );
}
