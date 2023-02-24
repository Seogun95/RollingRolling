import React from 'react';
import styled from 'styled-components';

function Input(props) {
  return (
    <>
      <LoginLabel>
        <LoginInsideLabel>{props.text}</LoginInsideLabel>
        <LoginInputIcon>{props.children}</LoginInputIcon>
        <LoginInput
          value={props.value}
          onChange={props.onChange}
          type={props.type}
        ></LoginInput>
      </LoginLabel>
    </>
  );
}

export default Input;

const LoginLabel = styled.label`
  position: relative;
  width: 100%;
  margin-top: 0.5rem;
  padding: 1.5rem 1rem 0.1rem 2.5rem;
  border-radius: 0.5rem;
  outline: none;
  font-size: 0.9375rem;
  background-color: white;
`;

const LoginInsideLabel = styled.label`
  position: absolute;
  font-size: 11px;
  top: 4px;
  left: 1rem;
  transform: translateY(0);
  color: black;
`;
const LoginInputIcon = styled.span`
  position: absolute;
  top: 70%;
  left: 10px;
  transform: translateY(-50%);
  color: #aeaeae;
`;
const LoginInput = styled.input`
  width: 100%;
  border-radius: 0.5rem;
  height: 30px;
  line-height: 4.375rem;
`;
