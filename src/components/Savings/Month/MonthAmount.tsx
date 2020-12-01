import * as React from 'react';
import { Description, Footer, Goal, Header, Value } from './Styled';

const MonthAmount = () => {
  return (
    <Goal>
      <Header>
        <Description>Monthly amount</Description>
        <Value>$521</Value>
      </Header>
      <Footer>
        You’re planning <b>48 monthly deposits</b> to reach your <b>$25,000</b>
        &nbsp; goal by <b>October 2020</b>.
      </Footer>
    </Goal>
  );
};

export default MonthAmount;
