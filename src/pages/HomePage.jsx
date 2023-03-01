import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { FcLikePlaceholder } from 'react-icons/fc';
import HomeCardItem from '../components/home/HomeCardItem';
import defaultImg from '../style/img/example.png';
import bg1 from '../style/img/bg1.jpeg';
import { ReactComponent as PaperHr } from '../style/img/hr.svg';
import { CustomHr } from '../style/Theme';
import { useMutation, useQuery } from 'react-query';
import { userInfo } from '../util/api/userInfo';
import { useInView } from 'react-intersection-observer';
import { getHomePostList, searchUser } from '../util/api/homePostList';
import Cookies from 'js-cookie';

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

  const { isLoading, isError, data } = useQuery('userQueryKey', () =>
    userInfo({ data: page })
  );
  //console.log(data);

  // 무한 스크롤 ---------------
  // ref가 보이면 inView=true, 안보이면 inView=false 자동으로 변경
  const [ref, inView] = useInView();
  // 서버에 보낼 페이지
  const [page, setPage] = useState(1);
  // 로딩
  const [loading, setLoading] = useState(false);

  const postList = useMutation('postList', getHomePostList, {
    onSuccess: (data) => {
      setLoading(false);
    },
  });
  useEffect(() => {
    postList.mutate(page);
    // page 값 변경되면 서버 요청 = 로딩 true
    setLoading(true);
  }, [page]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView]);

  // -----------------------

  // 검색기능
  //console.log('search', search);
  const token = Cookies.get('accessJWTToken');
  // 돋보기 클릭시
  const searchClick = () => {
    searchResult.mutate({ search, token });
  };

  const searchResult = useMutation(searchUser, {
    onSuccess: (data) => {
      console.log('search data : ', data);
    },
  });
  // -------------------------

  if (isLoading) {
    return <CardEmptyContainer>로딩중!!...</CardEmptyContainer>;
  }

  if (isError) {
    return <CardEmptyContainer>오류가 발생했습니다.</CardEmptyContainer>;
  }

  return (
    <>
      <HomeWrapper>
        <HomeMainContainer bgimg={bg1}>
          <HomeSearchWrapper>
            <h1>친구 찾기</h1>
            <span>
              롤링페이퍼를 남길 친구를 쉽게 찾고, 친구들에게 궁금한점을
              물어보세요!
            </span>
            <HomeSearchContainer>
              <SearchForm>
                <SearchIcon
                  isInputFocused={isInputFocused}
                  onClick={searchClick}
                >
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
            </HomeSearchImgWrapper>
          </HomeSearchWrapper>
          <PaperHrContainer>
            <PaperHr fill="white" />
          </PaperHrContainer>
        </HomeMainContainer>

        <div style={{ padding: '0 3rem' }}>
          <CustomHr />
        </div>
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

      <ScrollTest ref={ref}>까꿍</ScrollTest>
    </>
  );
}

const ScrollTest = styled.div`
  background-color: coral;
  height: 80px;
`;

const HomeMainContainer = styled.div`
  position: relative;
  width: 100%;
  background-image: linear-gradient(
      0deg,
      rgb(0 0 0 / 64%),
      rgb(224 224 224 / 39%)
    ),
    url(${(props) => props.bgimg});
  background-size: cover;
  padding-bottom: 10rem;
`;
const CardEmptyContainer = styled.div`
  ${(props) => props.theme.FlexCol}
  height: calc(100vh - 260px);
  gap: 1rem;
  span {
    color: tomato;
  }
`;

const PaperHrContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: -10px;
`;
const HomeWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 5rem;
`;

const HomeSearchWrapper = styled.div`
  padding: 8rem 5rem 0;
  max-width: 1200px;
  margin: 0 auto;
  > h1 {
    font-size: 3rem;
    color: white;
    margin-bottom: 1rem;
  }
  > span {
    color: white;
  }
`;

const HomeSearchContainer = styled.div`
  ${(props) => props.theme.FlexRow}
  height: 56px;
  padding: 0 0 0 24px;
  border-radius: 56px;
  background-color: #e9e9e966;
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
    color: #00000081;
  }
`;

const SearchIcon = styled.div`
  ${(props) => props.theme.FlexRow}
  width: unset;
  background: none;
  color: ${(props) => (props.isInputFocused ? 'black' : '#5d5d5d')};
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0 0.5rem 0 1rem;
`;

const HomeCardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  display: grid;
  justify-items: center;

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
      z-index: 3;
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
  padding: 0 2rem;
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
