import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import Checkbox from 'components/Checkbox';
import GiftCardFormContainer from 'containers/GiftCardFormContainer';
import GiftCardList from 'components/GiftCard';

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

function GiftCardSection({
  hasGiftCard,
  toggleGiftCardForm,
  giftCards,
  addGiftCard,
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
          <GiftCardFormContainer onAddGiftCard={addGiftCard} />
        </div>
      </CSSTransition>
    </Section>
  );
}

export default GiftCardSection;
