import * as React from 'react';
import styled from 'styled-components';
import MonthGoal from './MonthGoal';
import { Header } from './Header';
import { Confirm } from './Confirm';

const Card = styled.div`
  /* height: 511px; */
  max-width: 560px;
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  padding: 24px;
  margin: auto;
  @media (min-width: 768px) {
    padding: 35px 40px 40px 40px;
  }
`;

const Planner = () => {
  return (
    <Card>
      <Header />
      <MonthGoal />
      <Confirm />
    </Card>
  );
};

export default Planner;
