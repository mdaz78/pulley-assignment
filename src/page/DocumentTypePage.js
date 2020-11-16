import React, { useState } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
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
  display: none;
`;

const Label = styled.label`
  display: grid;
  grid-template-columns: 1fr, 1fr;
  align-items: center;
  padding: 1.4rem 0;
  user-select: none;

  &:hover {
    background-color: rgba(83, 181, 141, 0.05);
    cursor: pointer;
  }
`;

const Section = styled.section``;

const Svg = styled.svg.attrs({ height: '3.5rem', width: '3.5rem' })`
  ${Input}:checked + & {
    border: 20px solid blue;
  }
`;

const Circle = styled.circle.attrs({
  cx: '22',
  cy: '22',
  r: '21px',
  stroke: '#53B58D',
  fill: '#fff',
})`
  stroke-width: 0.15rem;
`;

const Polyline = styled.polyline.attrs({
  viewBox: '0 0 200 200',
  points: '9 23 19 30 33 14',
})`
  fill: white;
  stroke: #53b58d;
  stroke-width: 0.25rem;
`;

const Checkbox = styled.section`
  display: grid;
  grid-template-columns: 1fr 11fr;
`;

export default function DocumentTypePage() {
  const documentTypes = [
    {
      heading: 'Add Founder Series',
      description: 'Details on what founder shares are',
    },
    {
      heading: 'Add Investments',
      description: 'What are Investments, when you would have/add them',
    },
    {
      heading: 'Add Equity Plans',
      description: 'Equity plan description',
    },
    {
      heading: 'Add Employee Grants',
      description: 'Employee grant description',
    },
    {
      heading: 'Review Cap Table',
      description: 'All done? Invite your lawyer to review your cap table',
    },
  ];

  const [isChecked, setIsChecked] = useState({});
  const toggleCheckbox = (property, value) => {
    setIsChecked({ ...isChecked, [property]: !value });
  };

  const CheckBoxes = () =>
    documentTypes.map(({ heading, description }, index) => {
      return (
        <>
          <Label key={index}>
            <Input
              checked={isChecked[heading] || false}
              onChange={(e) => {
                toggleCheckbox(heading, isChecked[heading]);
              }}
            />
            <Checkbox>
              <Svg>
                <Circle />
                <Polyline />
              </Svg>
              <Section>
                <SecondaryHeading>{heading}</SecondaryHeading>
                <DescriptionText>{description}</DescriptionText>
              </Section>
            </Checkbox>
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
