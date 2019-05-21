import React, { useCallback } from 'react';
import { checkCode } from 'api/api';
import { useGiftCardContext } from 'contexts/giftCardContext';
import { validateControlCode, validateGiftCardNumber } from 'utils/utils';
import GiftCardForm from 'components/GiftCardForm';

const GiftCardFormContainer = () => {
  const [
    {
      giftCardNum,
      giftCardNumHasError,
      giftCardCode,
      giftCardCodeHasError,
      fetchStatus,
      fetchError,
    },
    {
      dispatchSetGiftCardNum,
      dispatchSetGiftCardCode,
      dispatchClientValidationFailed,
      dispatchGiftCardFetching,
      dispatchGiftCardSuccess,
      dispatchGiftCardFailure,
    },
  ] = useGiftCardContext();

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
      dispatchGiftCardFetching,
      dispatchClientValidationFailed,
      dispatchGiftCardSuccess,
      dispatchGiftCardFailure,
    ],
  );

  return (
    <GiftCardForm
      giftCardNum={giftCardNum}
      giftCardNumHasError={giftCardNumHasError}
      giftCardCode={giftCardCode}
      giftCardCodeHasError={giftCardCodeHasError}
      fetchStatus={fetchStatus}
      fetchError={fetchError}
      updateGiftCardNum={updateGiftCardNum}
      updateGiftCardCode={updateGiftCardCode}
      onSubmit={onSubmit}
    />
  );
};

export default GiftCardFormContainer;
