import Cookies from 'js-cookie';

// 로그인한 유저 토큰
function useSliceToken() {
  const getToken = Cookies.get('accessJWTToken');
  const token = getToken.split(' ')[1];

  return token;
}

export default useSliceToken;
