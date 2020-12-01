import * as React from 'react';
import { Goal, Left, Month, Right, Selected, Selector, Year } from './Styled';

export const MonthSelector = () => {
  return (
    <Goal>
      Reach goal by
      <Selector>
        <Left />
        <Selected>
          <Month>October</Month>
          <Year>2021</Year>
        </Selected>
        <Right />
      </Selector>
    </Goal>
  );
};
