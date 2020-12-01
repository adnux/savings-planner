import * as React from 'react';
import styled from 'styled-components';
import Planner from '../Savings/Planner';
import { SavingsCall } from './SavingsCall';

const StyledContent = styled.div`
  background: #f4f8fa;
  height: 100%;
  padding-top: 32px;
  @media (min-width: 768px) {
    padding-top: 48px;
  }
`;

const Content = () => {
  return (
    <StyledContent>
      <SavingsCall />
      <Planner />
    </StyledContent>
  );
};

export default Content;
