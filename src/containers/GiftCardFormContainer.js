import React, { useCallback } from 'react';
import { checkCode } from 'api/api';
import { giftCardActions, useGiftCardReducer } from 'reducers/giftCardReducer';
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
    e => {
      dispatch({
        type: giftCardActions.SET_GIFT_CARD_NUM,
        payload: {
          giftCardNum: e.target.value,
        },
      });
    },
    [dispatch],
  );

  const updateGiftCardCode = useCallback(
    e => {
      dispatch({
        type: giftCardActions.SET_GIFT_CARD_CODE,
        payload: {
          giftCardCode: e.target.value,
        },
      });
    },
    [dispatch],
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const num = giftCardNum.replace(/\s/g, '');
      const isNumValid = validateGiftCardNumber(num);
      const isCodeValid = validateControlCode(giftCardCode);
      if (isNumValid && isCodeValid) {
        dispatch({
          type: giftCardActions.GIFT_CARD_FETCHING,
          payload: {},
        });
        checkCode(num, giftCardCode)
          .then(response => {
            dispatch({
              type: giftCardActions.GIFT_CARD_SUCCESS,
              payload: {},
            });
            onAddGiftCard({
              number: num,
              discount: response.data.discount,
            });
          })
          .catch(err => {
            if (err.response && err.response.status === 404) {
              dispatch({
                type: giftCardActions.GIFT_CARD_FAILURE,
                payload: {
                  error: "We can't find that card. Maybe double check it?",
                },
              });
            } else {
              dispatch({
                type: giftCardActions.GIFT_CARD_FAILURE,
                payload: {
                  error: 'Something went wrong. Please try again...',
                },
              });
            }
          });
      } else {
        dispatch({
          type: giftCardActions.GIFT_CARD_CLIENT_VALIDATION_FAILED,
          payload: {
            isNumValid,
            isCodeValid,
          },
        });
      }
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
