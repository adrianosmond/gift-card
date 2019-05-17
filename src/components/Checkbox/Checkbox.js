import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.label`
  position: relative;
  padding-left: 22px;
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  height: 0;
  width: 0;
`;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 14px;
  height: 14px;
  margin-top: -7px;
  background-color: #6f9d6b;
`;

const Check = ({ isChecked }) => (
  <Box>
    {isChecked && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFF"
          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
        />
      </svg>
    )}
  </Box>
);

const Checkbox = ({ label, isChecked, onChange }) => (
  <Wrapper>
    <Input type="checkbox" value={isChecked} onChange={onChange} />
    <Check isChecked={isChecked} />
    <span>{label}</span>
  </Wrapper>
);

export default Checkbox;
