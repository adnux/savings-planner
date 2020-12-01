import dayjs = require('dayjs');
import * as React from 'react';

type SavingsType = {
  amount: number;
  dueDate: Date;
  monthlyValue: number;
  monthCount: number;
};

type PropsSavingsContext = {
  state: SavingsType;
  calculateSavings: React.Dispatch<React.SetStateAction<SavingsType>>;
};

const DEFAULT_VALUE = {
  state: {
    amount: 0,
    dueDate: dayjs()
      .date(1)
      .add(1, 'month')
      .toDate(),
    monthlyValue: 0.0,
    monthCount: 0
  },
  calculateSavings: () => {}
};

const SavingsContext = React.createContext<PropsSavingsContext>(DEFAULT_VALUE);

const SavingsContextProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState(DEFAULT_VALUE.state);

  const calculateSavings = (newState: SavingsType) => {
    const { amount, dueDate } = newState;
    const thisMonth = dayjs()
      .date(1)
      .hour(0)
      .minute(0)
      .second(0);
    const desiredMonth = dayjs(dueDate)
      .date(2)
      .hour(0)
      .minute(0)
      .second(0);
    const diff = desiredMonth.diff(thisMonth, 'month');
    console.log('desiredMonth', desiredMonth.toDate());
    console.log('thisMonth   ', thisMonth.toDate());
    console.log('amount', amount);
    console.log('diff', diff);
    setState({ ...newState, monthlyValue: amount / diff, monthCount: diff });
  };

  return (
    <SavingsContext.Provider value={{ state, calculateSavings }}>
      {children}
    </SavingsContext.Provider>
  );
};
export { SavingsContextProvider };
export default SavingsContext;
