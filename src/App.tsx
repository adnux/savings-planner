import * as React from 'react';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Logo from './components/Header/Logo';
import Helmet from 'react-helmet';
import GlobalStyle from './styles/globals';
import GlobalContext from './contexts';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Header>
        <Logo />
      </Header>
      <GlobalContext>
        <Content />
      </GlobalContext>
    </>
  );
};

export default App;
