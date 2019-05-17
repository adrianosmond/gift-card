import { useReducer, useMemo } from 'react';
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

// ACTIONS
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

export const useGiftCardReducer = () => {
  const [state, dispatch] = useReducer(giftCardReducer, INITIAL_STATE);

  // Instead of returning the plain dispatch object, return some action creators instead
  const dispatchSetGiftCardNum = giftCardNum =>
    dispatch({
      type: giftCardActions.SET_GIFT_CARD_NUM,
      payload: {
        giftCardNum,
      },
    });

  const dispatchSetGiftCardCode = giftCardCode =>
    dispatch({
      type: giftCardActions.SET_GIFT_CARD_CODE,
      payload: {
        giftCardCode,
      },
    });

  const dispatchClientValidationFailed = (isNumValid, isCodeValid) =>
    dispatch({
      type: giftCardActions.GIFT_CARD_CLIENT_VALIDATION_FAILED,
      payload: {
        isNumValid,
        isCodeValid,
      },
    });

  const dispatchGiftCardFetching = () =>
    dispatch({
      type: giftCardActions.GIFT_CARD_FETCHING,
      payload: {},
    });

  const dispatchGiftCardSuccess = () =>
    dispatch({
      type: giftCardActions.GIFT_CARD_SUCCESS,
      payload: {},
    });

  const dispatchGiftCardFailure = error =>
    dispatch({
      type: giftCardActions.GIFT_CARD_FAILURE,
      payload: {
        error,
      },
    });

  const dispatchers = useMemo(
    () => ({
      dispatchSetGiftCardNum,
      dispatchSetGiftCardCode,
      dispatchClientValidationFailed,
      dispatchGiftCardFetching,
      dispatchGiftCardSuccess,
      dispatchGiftCardFailure,
    }),
    [],
  );

  return [state, dispatchers];
};
