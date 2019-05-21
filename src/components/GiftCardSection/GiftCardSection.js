import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import Checkbox from 'components/Checkbox';
import GiftCardList from 'components/GiftCard';
import Button from 'components/Button';
import GiftCardInput from 'components/GiftCardInput';
import ControlCodeInput from 'components/ControlCodeInput';
import LoadingSpinner from 'components/LoadingSpinner';
import { fetchStatuses } from 'constants/constants';

const Section = styled.section`
  width: 440px;
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
  background-color: #ffffff;
`;

const Title = styled.h3`
  font-size: 14px;
  line-height: 1.142857;
  margin-bottom: 10px;
`;

const Instruction = styled.p`
  margin: 10px 0;
`;

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

function GiftCardSection({
  hasGiftCard,
  toggleGiftCardForm,
  giftCards,
  giftCardNum,
  giftCardNumHasError,
  giftCardCode,
  giftCardCodeHasError,
  fetchStatus,
  giftCardError,
  updateGiftCardNum,
  updateGiftCardCode,
  onSubmit,
}) {
  return (
    <Section>
      <Title>Gift Cards</Title>
      <Checkbox
        isChecked={hasGiftCard}
        onChange={toggleGiftCardForm}
        label="Do you have a gift card?"
      />
      <CSSTransition
        in={hasGiftCard}
        timeout={350}
        classNames="appear"
        unmountOnExit
      >
        <div>
          <Instruction>
            Please enter the 19-digit number and code from your gift card below
          </Instruction>
          <GiftCardList giftCards={giftCards} />
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
                  fetchStatus === fetchStatuses.FETCHING ? (
                    <LoadingSpinner />
                  ) : (
                    'Apply'
                  )
                }
                disabled={fetchStatus === fetchStatuses.FETCHING}
              />
              {giftCardError && <Error>{giftCardError}</Error>}
            </ButtonAndError>
          </form>
        </div>
      </CSSTransition>
    </Section>
  );
}

export default GiftCardSection;
