import { useQuery } from 'react-query';
import Cookies from 'js-cookie';
import { loginInfo } from '../util/api/userInfo';
export const useLoginUserCheck = () => {
  const token = Cookies.get('accessJWTToken');

  const { data } = useQuery('info', () => loginInfo({ token }));

  return data;
};
