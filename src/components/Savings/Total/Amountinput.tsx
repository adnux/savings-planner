import * as React from 'react';
import styled from 'styled-components';
import Dollar from '../../../icons/dollar.svg';

const Wrapper = styled.div`
  margin-bottom: 16px;

  /* @media (min-width: 768px) {
    max-width: 50%;
  } */
`;

const Amount = styled.div`
  background: #ffffff;
  border: 1px solid #e9eef2;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px;
`;

const DollarDign = styled(Dollar)`
  width: 24px;
  height: 24px;
`;

const Input = styled.input`
  background: #ffffff;
  border: none;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #4d6475;
  width: 80%;
  /* display: inline-block; */
  /* @media (min-width: 768px) {
    max-width: 50%;
  } */
`;

export const Amountinput = () => {
  return (
    <Wrapper>
      Total amount
      <Amount>
        <DollarDign /> <Input value="25,000" />
      </Amount>
    </Wrapper>
  );
};
