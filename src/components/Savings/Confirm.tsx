import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background: #1b31a8;

  width: 320px;
  height: 56px;
  border-radius: 32px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */
  text-align: center;

  /* $neutralWhite */
  color: #ffffff;
`;

export const Confirm = () => {
  return (
    <Wrapper>
      <Button>Confirm</Button>
    </Wrapper>
  );
};
