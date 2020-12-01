/* eslint-disable react-hooks/exhaustive-deps */
import dayjs = require('dayjs');
import * as React from 'react';
import SavingsContext from '../../../contexts/SavingsContext';
import useKeyPress from '../../../hooks/useKeyPress';
import { Goal, Left, Month, Right, Selected, Selector, Year } from './Styled';

export const MonthSelector: React.FC = () => {
  const { calculateSavings, state } = React.useContext(SavingsContext);
  const { dueDate } = state;
  const month = dayjs(dueDate).format('MMMM');
  const year = dayjs(dueDate).format('YYYY');
  const handleChange = (value: number) => {
    if (value > 0) {
      const newDate = dayjs(dueDate)
        .date(1)
        .add(1, 'month')
        .toDate();
      calculateSavings({ ...state, dueDate: newDate });
    } else {
      const newDate = dayjs(dueDate)
        .date(1)
        .subtract(1, 'month')
        .toDate();
      if (
        dayjs()
          .date(1)
          .isBefore(dayjs(newDate))
      ) {
        calculateSavings({ ...state, dueDate: newDate });
      }
    }
  };

  const left = useKeyPress('ArrowLeft');
  const right = useKeyPress('ArrowRight');
  React.useEffect(() => {
    if (left) {
      handleChange(-1);
    }
    if (right) {
      handleChange(1);
    }
  }, [left, right]);

  return (
    <Goal>
      Reach goal by
      <Selector>
        <Left
          onClick={() => {
            handleChange(-1);
          }}
        />
        <Selected>
          <Month>{month}</Month>
          <Year>{year}</Year>
        </Selected>
        <Right
          onClick={() => {
            handleChange(1);
          }}
        />
      </Selector>
    </Goal>
  );
};
