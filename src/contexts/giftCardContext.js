import React, { createContext, useContext } from 'react';
import { useGiftCardReducer } from 'reducers/giftCardReducer';

const GiftCardContext = createContext();

export const GiftCardProvider = ({ children }) => {
  const giftCardData = useGiftCardReducer();
  return (
    <GiftCardContext.Provider value={giftCardData}>
      {children}
    </GiftCardContext.Provider>
  );
};

export const useGiftCardContext = () => useContext(GiftCardContext);
