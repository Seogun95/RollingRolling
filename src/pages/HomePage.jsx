import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { FcLikePlaceholder } from 'react-icons/fc';
import HomeCardItem from '../components/home/HomeCardItem';
import defaultImg from '../style/img/example.png';
import { CustomHr } from '../style/Theme';
import { useQuery } from 'react-query';
import { userInfo } from '../util/api/userInfo';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };
  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleInputChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const { isLoading, isError, data } = useQuery('userQueryKey', userInfo);
  if (isLoading) {
    return <CardEmptyContainer>로딩중!!...</CardEmptyContainer>;
  }

  if (isError) {
    return <CardEmptyContainer>오류가 발생했습니다.</CardEmptyContainer>;
  }

  return (
    <>
      <HomeWrapper>
        <HomeSearchWrapper>
          <h1>친구 찾기</h1>
          <HomeSearchContainer>
            <SearchForm>
              <SearchIcon isInputFocused={isInputFocused}>
                <FaSearch size={'1.2rem'} />
              </SearchIcon>
              <SearchInput
                value={search}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                name={'search'}
                placeholder="찾고 싶은 친구의 닉네임을 적어보세요"
              />
            </SearchForm>
          </HomeSearchContainer>
        </HomeSearchWrapper>

        <HomeSearchImgWrapper>
          <SearchImgContainer>
            <img src={defaultImg} alt="" />
            <SearchInfoContainer>
              <h1>정다정</h1>
              <h3>자기 소개가 들어올 자리입니다.</h3>
              <SearchHowMuchQuestions>
                <SearchSpan>
                  질문 <span>1</span>
                </SearchSpan>
                <SearchSpan>
                  답변 <span>1</span>
                </SearchSpan>
                <FcLikePlaceholder />
              </SearchHowMuchQuestions>
            </SearchInfoContainer>
          </SearchImgContainer>
          <CustomHr />
        </HomeSearchImgWrapper>

        <HomeCardContainer>
          {data.map((user, i) => (
            <HomeCardItem
              key={i}
              nickname={user.nickname}
              introduction={user.introduction}
              userid={user.username}
            >
              {user.image && user.image !== 'null' ? (
                <img src={user.image} alt=""></img>
              ) : (
                <img src={defaultImg} alt=""></img>
              )}
            </HomeCardItem>
          ))}
        </HomeCardContainer>
      </HomeWrapper>
    </>
  );
}

const CardEmptyContainer = styled.div`
  ${(props) => props.theme.FlexCol}
  height: calc(100vh - 260px);
  gap: 1rem;
  span {
    color: tomato;
  }
`;

const HomeWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
`;

const HomeSearchWrapper = styled.div`
  margin: 2rem;
`;

const HomeSearchContainer = styled.div`
  ${(props) => props.theme.FlexRow}
  height: 56px;
  padding: 0 0 0 24px;
  border-radius: 56px;
  background-color: #e9e9e9;
  border: none;
  backdrop-filter: blur(12px);
  margin: 2rem 0;
`;

const SearchForm = styled.form`
  ${(props) => props.theme.FlexRow}
  font-size: .8rem;
  flex: auto;
  min-width: 32px;
`;

const SearchInput = styled.input`
  font-size: ${(props) => props.theme.FS.m};
  flex: auto;
  padding: 8px;
  border: none;
  background: none;
  margin: 0;
  min-width: 30px;
  &::placeholder {
    color: #00000046;
  }
`;

const SearchIcon = styled.div`
  ${(props) => props.theme.FlexRow}
  width: unset;
  background: none;
  color: ${(props) => (props.isInputFocused ? 'black' : 'gray')};
  cursor: pointer;
  font-size: 1.5rem;
  padding-left: 1rem;
`;

const HomeCardContainer = styled.div`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  display: grid;
  justify-items: center;
  margin: 2rem;

  article > a {
    &:after {
      content: '';
      display: block;
      height: 100%;
      left: 0;
      object-fit: cover;
      position: absolute;
      top: 0;
      width: 100%;
      transition: 0.3s ease;
      z-index: 1;
    }
    &:hover:after {
      background: transparent !important;
    }
  }
  &:hover article > a {
    &:after {
      background: #00000094;
    }
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const HomeSearchImgWrapper = styled.div`
  ${(props) => props.theme.FlexCol};
`;
const SearchImgContainer = styled.div`
  ${(props) => props.theme.FlexRow};
  height: 250px;

  img {
    width: 300px;
    height: 100%;
    border-radius: 1rem 0 0 1rem;
    object-fit: cover;
  }
`;
const SearchInfoContainer = styled.div`
  ${(props) => props.theme.FlexCol};
  align-items: flex-start;
  width: 100%;
  background: #e9e9e9;
  height: 100%;
  border-radius: 0 10px 10px 0;
  gap: 1rem;
  padding-left: 1rem;
`;

const SearchHowMuchQuestions = styled.div`
  ${(props) => props.theme.FlexRow};
  justify-content: flex-start;
  align-items: flex-end;
  svg {
    font-size: ${(props) => props.theme.FS.xl};
    margin-bottom: 0.3rem;
  }
`;
const SearchSpan = styled.div`
  padding: 0.3rem 1rem;
  background: black;
  color: white;
  border-radius: 1rem;
  margin: 2rem 1rem 0 0;
`;
