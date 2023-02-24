import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import Input from '../components/elements/Input.jsx';
import Button from '../components/elements/Button';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [inputId, setinputId] = useState('');
    const [inputPw, setinputPw] = useState('');

    const [idMessage, setIdMessage] = useState('아이디를 입력해주세요');
    const [pwMessage, setPwMessage] = useState('비밀번호를 입력해주세요');

    const [isId, setIsId] = useState(false);
    const [isPw, setIsPw] = useState(false);
    // const getToken = Cookies.get('token');
    const navigate = useNavigate();

    // id input change
    const idChangeHanlder = (e) => {
        setinputId(e.target.value);
        const idRegex = /^(?=.*?[0-9])(?=.*?[a-z]).{5,}$/;
        if (!idRegex.test(e.target.value)) {
            setIdMessage('영어 소문자, 숫자 조합의 5자 이상의 아이디만 작성할 수 있습니다.');
            setIsId(false);
        } else {
            setIdMessage('');
            setIsId(true);
        }
    };
    // pw input change
    const pwChangeHandler = (e) => {
        setinputPw(e.target.value);
        const pwRegex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
        if (!pwRegex.test(e.target.value)) {
            setPwMessage('영어 소문자와 숫자, 특수문자 조합의 8-20자의 비밀번호만 작성할 수 있습니다.');
            setIsPw(false);
        } else {
            setPwMessage('');
            setIsPw(true);
        }
    };

    //스크롤 방지
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const moveRegistrationPg = () => {
        navigate('/signup');
    };

    return (
        <LoginModalWrapper height={'500px'}>
            <LoginModal>
                <LoginText>로그인</LoginText>
                <LoginInputContainer>
                    <Input text={'아이디'} value={inputId} onChange={idChangeHanlder} type={'id'}>
                        <FaUserAlt />
                    </Input>
                    <LoginAlertSpan isIdOrPw={isId}>{idMessage}</LoginAlertSpan>
                    <Input text={'비밀번호'} value={inputPw} onChange={pwChangeHandler} type={'password'}>
                        <FaLock />
                    </Input>
                    <LoginAlertSpan isIdOrPw={isPw} height={'50px'}>
                        {pwMessage}
                    </LoginAlertSpan>
                    <Button bg={'#8CB46D'} h={'3.125rem'} size={'0.9rem'}>
                        로그인
                    </Button>
                </LoginInputContainer>

                <LoginGoToSignup>
                    <span>RollingRolling 회원이 아니신가요? </span>
                    <Button onClick={moveRegistrationPg} color={'white'} size={'0.9rem'} w={'auto'}>
                        가입하기
                    </Button>
                </LoginGoToSignup>
            </LoginModal>
        </LoginModalWrapper>
    );
}

export default LoginPage;

export const LoginModalWrapper = styled.div`
    ${(props) => props.theme.FlexRow}
    position: fixed;
    inset: 0;
    z-index: 100;
`;

export const LoginText = styled.h1`
    font-size: ${(props) => props.theme.FS.xl};
    color: white;
`;

export const LoginModal = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    background: #161616aa;
    backdrop-filter: blur(3px);

    padding: 3rem;
    border-radius: 1rem;
    width: 500px;
    height: ${(props) => props.height};
`;

export const LoginAlertSpan = styled.div`
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem 0.5rem;
    height: ${(props) => props.height};
    color: ${(props) => (props.isIdOrPw ? 'springgreen' : 'tomato')};
`;

export const LoginInputContainer = styled.form`
    ${(props) => props.theme.FlexCol}
    align-items: flex-start;
    margin: 1rem 0;
`;

export const LoginGoToSignup = styled.div`
    ${(props) => props.theme.FlexRow}
    justify-content: flex-end;
    span {
        font-size: ${(props) => props.theme.FS.xs};
        color: white;
        opacity: 0.6;
    }
`;
