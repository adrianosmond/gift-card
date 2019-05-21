import React from 'react';
import GlobalStyles from 'style/global';
import { GiftCardProvider } from 'contexts/giftCardContext';
import AppContainer from 'containers/AppContainer';

function App() {
  return (
    <GiftCardProvider>
      <GlobalStyles />
      <AppContainer />
    </GiftCardProvider>
  );
}

export default App;
