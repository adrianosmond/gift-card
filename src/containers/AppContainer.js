import React, { useState, useCallback } from 'react';
import GiftCardSection from 'components/GiftCardSection';

function AppContainer() {
  const [hasGiftCard, setHasGiftCard] = useState(false);
  const toggleGiftCardForm = useCallback(
    () => setHasGiftCard(state => !state),
    [setHasGiftCard],
  );

  const [giftCards, setGiftCards] = useState([]);
  const addGiftCard = useCallback(
    giftCard => {
      if (giftCards.filter(g => g.number === giftCard.number).length === 0) {
        setGiftCards(state => [...state, giftCard]);
        return true;
      }
      return false;
    },
    [giftCards, setGiftCards],
  );

  return (
    <GiftCardSection
      hasGiftCard={hasGiftCard}
      toggleGiftCardForm={toggleGiftCardForm}
      giftCards={giftCards}
      addGiftCard={addGiftCard}
    />
  );
}

export default AppContainer;
