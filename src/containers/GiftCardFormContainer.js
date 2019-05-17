import React, { useCallback } from 'react';
import { checkCode } from 'api/api';
import {
  useGiftCardReducer,
  dispatchSetGiftCardNum,
  dispatchSetGiftCardCode,
  dispatchClientValidationFailed,
  dispatchGiftCardFetching,
  dispatchGiftCardSuccess,
  dispatchGiftCardFailure,
} from 'reducers/giftCardReducer';
import { validateControlCode, validateGiftCardNumber } from 'utils/utils';
import GiftCardForm from 'components/GiftCardForm';

const GiftCardFormContainer = ({ onAddGiftCard }) => {
  const [
    {
      giftCardNum,
      giftCardNumHasError,
      giftCardCode,
      giftCardCodeHasError,
      fetchStatus,
      fetchError,
    },
    dispatch,
  ] = useGiftCardReducer();

  const updateGiftCardNum = useCallback(
    e => dispatchSetGiftCardNum(e.target.value, dispatch),
    [dispatch],
  );

  const updateGiftCardCode = useCallback(
    e => dispatchSetGiftCardCode(e.target.value, dispatch),
    [dispatch],
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const num = giftCardNum.replace(/\s/g, '');
      const isNumValid = validateGiftCardNumber(num);
      const isCodeValid = validateControlCode(giftCardCode);
      if (!isNumValid || !isCodeValid) {
        dispatchClientValidationFailed(isNumValid, isCodeValid, dispatch);
        return;
      }
      dispatchGiftCardFetching(dispatch);
      checkCode(num, giftCardCode)
        .then(response => {
          const card = { number: num, discount: response.data.discount };
          if (onAddGiftCard(card)) {
            dispatchGiftCardSuccess(dispatch);
          } else {
            dispatchGiftCardFailure(
              "You've already applied that gift card...",
              dispatch,
            );
          }
        })
        .catch(err => {
          if (err.response && err.response.status === 404) {
            dispatchGiftCardFailure(
              "We can't find that card. Maybe double check it?",
              dispatch,
            );
          } else {
            dispatchGiftCardFailure(
              'Something went wrong. Please try again...',
              dispatch,
            );
          }
        });
    },
    [giftCardNum, giftCardCode, onAddGiftCard, dispatch],
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
