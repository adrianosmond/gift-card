import React from 'react';
import styled from 'styled-components';
import GiftCard from 'components/GiftCardList';

const List = styled.div`
  margin: 10px 0;
  > :not(:first-child) {
    margin-top: 10px;
  }
`;

const GiftCardList = ({ giftCards }) => (
  <List>
    {giftCards.map(({ number, discount }) => (
      <GiftCard key={number} number={number} discount={discount} />
    ))}
  </List>
);

export default GiftCardList;
