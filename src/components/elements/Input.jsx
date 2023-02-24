import React from 'react';
import styled from 'styled-components';

function Input(props) {
    return (
        <>
            <LoginLabel>
                <LoginInsideLabel>{props.text}</LoginInsideLabel>
                <LoginInputIcon>{props.children}</LoginInputIcon>
                <LoginInput value={props.value} onChange={props.onChange} type={props.type}></LoginInput>
            </LoginLabel>
        </>
    );
}

export default Input;

const LoginLabel = styled.label`
    width: 100%;
    position: relative;
    margin: 0.2rem;
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
    height: 3.125rem;
    line-height: 4.375rem;
    padding: 16px 35px 0;
`;
