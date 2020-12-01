import dayjs = require('dayjs');
import * as React from 'react';
import SavingsContext from '../../../contexts/SavingsContext';
import { Description, Footer, Goal, Header, Value } from './Styled';

const MonthAmount = () => {
  const { state } = React.useContext(SavingsContext);
  const { amount, dueDate, monthlyValue, monthCount } = state;
  const goalDate = dayjs(dueDate).format('MMMM YYYY');
  return (
    <Goal>
      <Header>
        <Description>Monthly amount</Description>
        <Value>${Number(monthlyValue).toFixed(2)}</Value>
      </Header>
      <Footer>
        You’re planning <b>{monthCount} monthly deposits</b> to reach your
        &nbsp;<b>${amount}</b> goal by <b>{goalDate}</b>.
      </Footer>
    </Goal>
  );
};

export default MonthAmount;
