import * as React from 'react';

import { SavingsContextProvider } from './SavingsContext';

const GlobalContext: React.FC = ({ children }) => {
  return (
    <>
      <SavingsContextProvider>{children}</SavingsContextProvider>;
    </>
  );
};

export default GlobalContext;
