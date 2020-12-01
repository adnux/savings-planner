import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  /* @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap'); */
  /* @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap'); */
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 120%;
  color: #1b31a8;
  margin-bottom: 24px;
  text-align: center;
`;

export const SavingsCall = () => {
  return (
    <Text>
      Let's plan your <b>saving goal</b>.
    </Text>
  );
};
