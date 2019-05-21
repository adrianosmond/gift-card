import React, { useCallback } from 'react';
import GiftCardSection from 'components/GiftCardSection';
import { useGiftCardReducer } from 'reducers/giftCardReducer';
import { validateControlCode, validateGiftCardNumber } from 'utils/utils';
import { checkCode } from 'api/api';

function GiftCardContainer() {
  const [
    {
      hasGiftCard,
      giftCards,
      giftCardNum,
      giftCardNumHasError,
      giftCardCode,
      giftCardCodeHasError,
      fetchStatus,
      giftCardError,
    },
    {
      dispatchToggleHasGiftCard,
      dispatchSetGiftCardNum,
      dispatchSetGiftCardCode,
      dispatchClientValidationFailed,
      dispatchGiftCardFetching,
      dispatchGiftCardSuccess,
      dispatchGiftCardFailure,
    },
  ] = useGiftCardReducer();

  const updateGiftCardNum = useCallback(
    e => dispatchSetGiftCardNum(e.target.value),
    [dispatchSetGiftCardNum],
  );

  const updateGiftCardCode = useCallback(
    e => dispatchSetGiftCardCode(e.target.value),
    [dispatchSetGiftCardCode],
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const num = giftCardNum.replace(/\s/g, '');
      const isNumValid = validateGiftCardNumber(num);
      const isCodeValid = validateControlCode(giftCardCode);
      if (!isNumValid || !isCodeValid) {
        dispatchClientValidationFailed(isNumValid, isCodeValid);
        return;
      }
      // wait til we have both a valid num and code before checking if the
      // card has been added so as not to show two types of error at the same time
      const cardExists = giftCards.some(g => g.number === num);
      if (cardExists) {
        dispatchClientValidationFailed(true, true, cardExists);
        return;
      }
      dispatchGiftCardFetching();
      checkCode(num, giftCardCode)
        .then(response => {
          const card = { number: num, discount: response.data.discount };
          dispatchGiftCardSuccess(card);
        })
        .catch(err => {
          if (err.response && err.response.status === 404) {
            dispatchGiftCardFailure(
              "We can't find that card. Maybe double check it?",
            );
          } else {
            dispatchGiftCardFailure(
              'Something went wrong. Please try again...',
            );
          }
        });
    },
    [
      giftCardNum,
      giftCardCode,
      giftCards,
      dispatchGiftCardFetching,
      dispatchClientValidationFailed,
      dispatchGiftCardSuccess,
      dispatchGiftCardFailure,
    ],
  );

  return (
    <GiftCardSection
      hasGiftCard={hasGiftCard}
      toggleGiftCardForm={dispatchToggleHasGiftCard}
      giftCards={giftCards}
      giftCardNum={giftCardNum}
      giftCardNumHasError={giftCardNumHasError}
      giftCardCode={giftCardCode}
      giftCardCodeHasError={giftCardCodeHasError}
      fetchStatus={fetchStatus}
      giftCardError={giftCardError}
      updateGiftCardNum={updateGiftCardNum}
      updateGiftCardCode={updateGiftCardCode}
      onSubmit={onSubmit}
    />
  );
}

export default GiftCardContainer;
