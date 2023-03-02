import { useEffect } from 'react';
import Cookies from 'js-cookie';

export const HomeTokenCheck = (navigate) => {
  const getToken = Cookies.get('accessJWTToken');
  useEffect(() => {
    if (!getToken) {
      alert('로그인 시간이 만료되었습니다. 다시 로그인 해주세요');
      navigate('/');
    }
  }, [navigate, getToken]);
};

export const LoginTokenCheck = (navigate) => {
  const getToken = Cookies.get('accessJWTToken');
  useEffect(() => {
    if (getToken) {
      navigate('/home');
    }
  }, [navigate, getToken]);
};
