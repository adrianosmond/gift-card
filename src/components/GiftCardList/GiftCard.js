import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f2f2f2;
`;

const Title = styled.div`
  font-weight: 400;
  margin-bottom: 5px;
`;

const Discount = styled.div`
  font-weight: 500;
`;

const Number = styled.div`
  margin: 0;
`;

const GiftCard = ({ number, discount }) => (
  <Wrapper>
    <div>
      <Title>Gift Card</Title>
      <Number>**** **** **** **** {number.substring(16)}</Number>
    </div>
    <Discount>-€{discount.toFixed(2)}</Discount>
  </Wrapper>
);

export default GiftCard;
