import React from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import GiftCard from 'components/GiftCardList';

const List = styled.div`
  margin: 10px 0;
  > :not(:first-child) {
    margin-top: 10px;
  }
`;

const GiftCardList = ({ giftCards }) => (
  <List>
    <TransitionGroup component={null}>
      {giftCards.map(({ number, discount }) => (
        <CSSTransition
          in
          key={number}
          timeout={350}
          classNames="appear"
          unmountOnExit
        >
          <GiftCard key={number} number={number} discount={discount} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </List>
);

export default GiftCardList;
