import React from 'react';
import styled from 'styled-components';
import check from 'assets/images/check.svg';

const Wrapper = styled.label`
  position: relative;
  padding-left: 22px;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 14px;
    height: 14px;
    margin-top: -7px;
    background-color: #6f9d6b;
  }

  &:after {
    content: '';
    display: ${p => (p.isChecked ? 'block' : 'none')};
    position: absolute;
    top: 50%;
    left: 0;
    width: 14px;
    height: 14px;
    margin-top: -7px;
    background-image: url(${check});
    background-size: 100%;
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  height: 0;
  width: 0;
`;

const Checkbox = ({ label, isChecked, onChange }) => (
  <Wrapper isChecked={isChecked}>
    <Input type="checkbox" value={isChecked} onChange={onChange} />
    <span>{label}</span>
  </Wrapper>
);

export default Checkbox;
