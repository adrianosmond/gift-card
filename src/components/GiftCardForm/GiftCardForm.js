import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import GiftCardInput from 'components/GiftCardInput';
import ControlCodeInput from 'components/ControlCodeInput';
import LoadingSpinner from 'components/LoadingSpinner';
import { fetchStatuses } from 'constants/constants';

const InputHolder = styled.div`
  display: flex;
  margin: 10px 0;
`;

const ApplyButton = styled(Button)`
  width: 140px;
  flex-shrink: 0;
`;

const ButtonAndError = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Error = styled.div`
  flex-grow: 1;
  padding: 10px;
  text-align: center;
  color: #dc143c;
  font-weight: 400;
`;

const GiftCardForm = ({
  giftCardNum,
  giftCardNumHasError,
  giftCardCode,
  giftCardCodeHasError,
  fetchStatus,
  giftCardError,
  updateGiftCardNum,
  updateGiftCardCode,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} noValidate>
    <InputHolder>
      <GiftCardInput
        hasError={giftCardNumHasError}
        placeholder="Gift Card Number"
        value={giftCardNum}
        onChange={updateGiftCardNum}
      />
      <ControlCodeInput
        hasError={giftCardCodeHasError}
        placeholder="Control Code"
        value={giftCardCode}
        onChange={updateGiftCardCode}
      />
    </InputHolder>
    <ButtonAndError>
      <ApplyButton
        label={
          fetchStatus === fetchStatuses.FETCHING ? <LoadingSpinner /> : 'Apply'
        }
        disabled={fetchStatus === fetchStatuses.FETCHING}
      />
      {giftCardError && <Error>{giftCardError}</Error>}
    </ButtonAndError>
  </form>
);

export default GiftCardForm;
