import React, { useState } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import Checkbox from '../components/Checkbox';
import {
  DescriptionText,
  SecondaryHeading,
  Separator,
} from '../components/styled';

const HeadingContainer = styled.div`
  margin-bottom: 2.1rem;
`;

const CustomSeparator = styled(Separator)`
  margin-bottom: 0;
  margin-top: 0;
`;

const Input = styled.input.attrs({ type: 'checkbox' })`
  width: 4rem;
  height: 4rem;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
`;

const Label = styled.label`
  display: grid;
  grid-template-columns: 1fr, 1fr;
  align-items: center;
  padding: 1.4rem 0;

  &:hover {
    background-color: rgba(83, 181, 141, 0.05);
    cursor: pointer;
  }
`;

export default function DocumentTypePage() {
  const data = [
    {
      heading: 'Add Founder Series',
      description: 'Details on what founder shares are',
      isChecked: false,
    },
    {
      heading: 'Add Investments',
      description: 'What are Investments, when you would have/add them',
      isChecked: false,
    },
    {
      heading: 'Add Equity Plans',
      description: 'Equity plan description',
      isChecked: false,
    },
    {
      heading: 'Add Employee Grants',
      description: 'Employee grant description',
      isChecked: false,
    },
    {
      heading: 'Review Cap Table',
      description: 'All done? Invite your lawyer to review your cap table',
      isChecked: false,
    },
  ];

  const [documentTypes, setDocumentTypes] = useState(data);

  const CheckBoxes = () =>
    documentTypes.map(({ heading, description, isChecked }, index) => {
      return (
        <>
          <Label key={index}>
            <section>
              <SecondaryHeading>{heading}</SecondaryHeading>
              <DescriptionText>{description}</DescriptionText>
            </section>
          </Label>
          <CustomSeparator />
        </>
      );
    });

  return (
    <div>
      <HeadingContainer>
        <Header
          heading='Let’s Create your Cap Table!'
          description='Stuck on what to do? You can always come back here to check on what else you’ll need to add to complete your cap table.'
        />
      </HeadingContainer>
      <BackButton />
      <CustomSeparator />
      <CheckBoxes />
    </div>
  );
}
