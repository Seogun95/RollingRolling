import React, { useEffect, useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import Button from '../components/elements/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../components/elements/Input';
import { LoginModalWrapper, LoginText, LoginModal, LoginInputContainer, LoginGoToSignup, LoginAlertSpan } from './LoginPage';

function SignupPage() {
    const [inputId, setinputId] = useState('');
    const [inputPw, setinputPw] = useState('');
    const [inputCheckPw, setinputCheckPw] = useState('');
    const [inputEmail, setinputEmail] = useState('');
    const [inputNickname, setinputNickname] = useState('');

    const [idMessage, setIdMessage] = useState('아이디를 입력해주세요');
    const [pwMessage, setPwMessage] = useState('비밀번호를 입력해주세요');
    const [checkPwMessage, setCheckPwMessage] = useState('비밀번호를 다시 입력해주세요');
    const [emailMessage, setEmailMessage] = useState('이메일을 입력해주세요');
    const [nicknameMessage, setNicknameMessage] = useState('닉네임을 입력해주세요');

    const [isId, setIsId] = useState(false);
    const [isPw, setIsPw] = useState(false);
    const [isCheckPw, setIsCheckPw] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isNickname, setIsNickname] = useState(false);

    const navigate = useNavigate();

    // id input change
    const idChangeHanlder = (e) => {
        setinputId(e.target.value);
        const idRegex = /^(?=.*?[0-9])(?=.*?[a-z]).{5,}$/;
        if (!idRegex.test(e.target.value)) {
            setIdMessage('아이디는 영어 소문자, 숫자 조합의 5자 이상의 형식으로 입력해주세요.');
            setIsId(false);
        } else {
            setIdMessage('사용 가능한 아이디 입니다.');
            setIsId(true);
        }
    };
    // pw input change
    const pwChangeHandler = (e) => {
        setinputPw(e.target.value);
        const pwRegex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
        if (!pwRegex.test(e.target.value)) {
            setPwMessage('영문과 숫자, 특수문자 조합의 8-20자의 비밀번호를 사용해야 합니다.');
            setIsPw(false);
        } else {
            setPwMessage('사용 가능한 비밀번호 입니다.');
            setIsPw(true);
        }
    };
    // pw check change
    const checkPwChangeHandler = (e) => {
        setinputCheckPw(e.target.value);
        if (inputPw !== e.target.value) {
            setCheckPwMessage('비밀번호가 같지 않습니다. 다시 입력해주세요.');
            setIsCheckPw(false);
        } else {
            setCheckPwMessage('비밀번호가 같습니다.');
            setIsCheckPw(true);
        }
    };
    // email input change
    const emailChangeHanlder = (e) => {
        setinputEmail(e.target.value);
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(e.target.value)) {
            setEmailMessage('이메일 형식으로 입력해주세요.');
            setIsEmail(false);
        } else {
            setEmailMessage('사용 가능한 이메일 입니다.');
            setIsEmail(true);
        }
    };
    // nickname input change
    const nicknameChangeHanlder = (e) => {
        setinputNickname(e.target.value);
    };

    // 회원가입
    // const joinHandler = async (e) => {
    //     e.preventDefault();
    //     if (isId === true && isPw === true) {
    //         try {
    //             await jwtserver.post('/register', {
    //                 id: inputId,
    //                 password: inputPw,
    //             });
    //             alert('회원가입이 완료 되었습니다.');
    //             moveSignupPg();
    //         } catch (error) {
    //             alert(error.response.data.message);
    //         }
    //     }
    // };

    //스크롤 방지
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const moveSignupPg = () => {
        navigate(-1);
    };

    return (
        <LoginModalWrapper>
            <LoginModal height={'730px'}>
                <LoginText>회원가입</LoginText>
                <LoginInputContainer>
                    <Input text={'아이디'} value={inputId} onChange={idChangeHanlder} type={'text'} width={'60%'}>
                        <FaUserAlt />
                    </Input>

                    <LoginAlertSpan isIdOrPw={isId}>{idMessage}</LoginAlertSpan>

                    <Input text={'비밀번호'} value={inputPw} onChange={pwChangeHandler} type={'password'}>
                        <FaLock />
                    </Input>
                    <LoginAlertSpan isIdOrPw={isPw}>{pwMessage}</LoginAlertSpan>

                    <Input text={'비밀번호 확인'} value={inputCheckPw} onChange={checkPwChangeHandler} type={'password'}>
                        <FaLock />
                    </Input>
                    <LoginAlertSpan isIdOrPw={isCheckPw}>{checkPwMessage}</LoginAlertSpan>

                    <Input text={'닉네임'} value={inputNickname} onChange={nicknameChangeHanlder} type={'text'}>
                        <FaLock />
                    </Input>

                    <LoginAlertSpan isIdOrPw={isNickname}>{nicknameMessage}</LoginAlertSpan>

                    <Input text={'이메일'} value={inputEmail} onChange={emailChangeHanlder} type={'email'}>
                        <FaUserAlt />
                    </Input>
                    <LoginAlertSpan isIdOrPw={isEmail}>{emailMessage}</LoginAlertSpan>

                    <Button bg={'#8CB46D'} h={'3.125rem'} size={'0.9rem'}>
                        회원가입
                    </Button>
                </LoginInputContainer>

                <LoginGoToSignup>
                    <span>로그인 페이지로 돌아갈까요? </span>
                    <Button onClick={moveSignupPg} color={'white'} size={'0.9rem'} w={'auto'}>
                        돌아가기
                    </Button>
                </LoginGoToSignup>
            </LoginModal>
        </LoginModalWrapper>
    );
}

export default SignupPage;
