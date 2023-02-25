import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
import Button from './Button';

const HeaderStyles = styled.header`
  width: 100%;
  ${(props) => props.theme.DarkBlur};
  height: 3.125rem;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: white;
  position: fixed;
  top: 0;
  z-index: 99999;
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);
  &.hide {
    transform: translateY(-100%);
  }
`;

const Logo = styled.p`
  height: 2rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

export default function Header() {
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHide(currentScrollPos > prevScrollPos && currentScrollPos > 0);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const LogoutBtn = () => {
    const navigate = useNavigate();
    return (
      <Button
        onClick={() => {
          // Cookies.remove('token');
          navigate('/login');
        }}
      >
        로그 아웃
      </Button>
    );
  };
  return (
    <HeaderStyles className={isHide ? 'hide' : !isHide ? '' : 'hide'}>
      <Link to="/">
        <Logo>롤링롤링</Logo>
      </Link>
      <LogoutBtn />
    </HeaderStyles>
  );
}
