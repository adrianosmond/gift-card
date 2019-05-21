import React from 'react';
import GiftCardSection from 'components/GiftCardSection';
import { useGiftCardContext } from 'contexts/giftCardContext';

function AppContainer() {
  const [
    { hasGiftCard, giftCards },
    { dispatchToggleHasGiftCard },
  ] = useGiftCardContext();

  return (
    <GiftCardSection
      hasGiftCard={hasGiftCard}
      toggleGiftCardForm={dispatchToggleHasGiftCard}
      giftCards={giftCards}
    />
  );
}

export default AppContainer;
