import { useReducer } from 'react';
import { validateGiftCardNumber, validateControlCode } from 'utils/utils';
import { fetchStatuses } from 'constants/constants';

const INITIAL_STATE = {
  giftCardNum: '',
  giftCardNumHasError: false,
  giftCardCode: '',
  giftCardCodeHasError: false,
  fetchStatus: fetchStatuses.IDLE,
  fetchError: '',
};

export const giftCardActions = {
  SET_GIFT_CARD_NUM: 'SET_GIFT_CARD_NUM',
  SET_GIFT_CARD_CODE: 'SET_GIFT_CARD_CODE',
  GIFT_CARD_CLIENT_VALIDATION_FAILED: 'GIFT_CARD_CLIENT_VALIDATION_FAILED',
  GIFT_CARD_FETCHING: 'GIFT_CARD_FETCHING',
  GIFT_CARD_SUCCESS: 'GIFT_CARD_SUCCESS',
  GIFT_CARD_FAILURE: 'GIFT_CARD_FAILURE',
};

export const giftCardReducer = (state, action) => {
  switch (action.type) {
    case giftCardActions.SET_GIFT_CARD_NUM: {
      const { giftCardNum } = action.payload;
      return {
        ...state,
        giftCardNum,
        giftCardNumHasError:
          state.giftCardNumHasError &&
          !validateGiftCardNumber(giftCardNum.replace(/\s/g, '')),
      };
    }

    case giftCardActions.SET_GIFT_CARD_CODE: {
      const { giftCardCode } = action.payload;
      return {
        ...state,
        giftCardCode,
        giftCardCodeHasError:
          state.giftCardCodeHasError && !validateControlCode(giftCardCode),
      };
    }

    case giftCardActions.GIFT_CARD_CLIENT_VALIDATION_FAILED: {
      return {
        ...state,
        giftCardNumHasError: !action.payload.isNumValid,
        giftCardCodeHasError: !action.payload.isCodeValid,
      };
    }

    case giftCardActions.GIFT_CARD_FETCHING: {
      return {
        ...state,
        fetchStatus: fetchStatuses.FETCHING,
        fetchError: '',
      };
    }

    case giftCardActions.GIFT_CARD_SUCCESS: {
      return {
        ...state,
        fetchStatus: fetchStatuses.SUCCESS,
        giftCardNum: '',
        giftCardCode: '',
      };
    }
    case giftCardActions.GIFT_CARD_FAILURE: {
      return {
        ...state,
        fetchStatus: fetchStatuses.FAILURE,
        fetchError: action.payload.error,
      };
    }
    default:
      throw new Error();
  }
};

export const useGiftCardReducer = () =>
  useReducer(giftCardReducer, INITIAL_STATE);
