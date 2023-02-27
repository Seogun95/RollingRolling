import { useEffect, useState } from 'react';
//npm i jwt-decode
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

export default function useJwtDecode() {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const getToken = Cookies.get('accessJWTToken');
    const jwtdecode = jwt_decode(getToken).sub;
    setUserName(jwtdecode);
  }, []);

  return userName;
}
