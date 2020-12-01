import * as React from 'react';
import styled from 'styled-components';
import { Amountinput } from './Amountinput';
import { MonthSelector } from './MonthSelector';

const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const TotalAmount = () => {
  return (
    <Wrapper>
      <Amountinput />
      <MonthSelector />
    </Wrapper>
  );
};
