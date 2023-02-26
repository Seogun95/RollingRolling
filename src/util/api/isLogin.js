import Cookies from 'js-cookie';

const isLogin = () => !!Cookies.get('accessJWTToken');

export default isLogin;
