import styled from 'styled-components';

const PrimaryHeading = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: rgba(15, 35, 25, 1);
`;

const SecondaryHeading = styled.h2`
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 1);
  font-weight: 600;
`;

const DescriptionText = styled.p`
  font-size: 1.2rem;
  margin-top: 0.8rem;
  font-weight: 400;
`;

const Wrapper = styled.section`
  margin-top: 4rem;
`;

const Separator = styled.div`
  width: 100%;
  background-color: rgba(214, 224, 220, 1);
  height: 1px;
  margin-top: 1.3rem;
  margin-bottom: 1.3rem;
`;
export {
  PrimaryHeading,
  SecondaryHeading,
  DescriptionText,
  Wrapper,
  Separator,
};
