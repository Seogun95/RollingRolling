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
          maxLength={props.len}
          readOnly={props.readOnly}
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
  background-color: white;
`;

const LoginInsideLabel = styled.label`
  position: absolute;
  top: 7px;
  left: 1rem;
  transform: translateY(0);
  font-size: ${(props) => props.theme.FS.s};
  color: black;
`;
const LoginInputIcon = styled.span`
  position: absolute;
  top: 74%;
  left: 10px;
  transform: translateY(-50%);
  color: #aeaeae;
`;
const LoginInput = styled.input`
  width: 100%;
  border-radius: 0.5rem;
  height: 30px;
  font-size: ${(props) => props.theme.FS.m};
`;
