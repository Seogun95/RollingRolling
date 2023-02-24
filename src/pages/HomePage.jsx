import React from 'react';
import styled from 'styled-components';
import useInputOnChange from '../hooks/useInputOnChange';
import { FaSearch } from 'react-icons/fa';
import HomeCardItem from '../components/HomCardItem';
export default function HomePage() {
  const [{ search }, inputHandler] = useInputOnChange({ search: '' });
  return (
    <>
      <HomeWrapper>
        <HomeSearchContainer>
          <h1>친구 찾기</h1>
          <HomeSearchForm>
            <SearchLabel>
              찾고 싶은 친구의 닉네임을 적어보세요
              <SearchInputContainer>
                <SearchInput
                  value={search}
                  onChange={inputHandler}
                  name={'search'}
                  placeholder="닉네임을 입력해주세요"
                />
                <SearchIcon>
                  <FaSearch size={'1.2rem'} />
                </SearchIcon>
              </SearchInputContainer>
            </SearchLabel>
          </HomeSearchForm>
        </HomeSearchContainer>

        <HomeCardContainer>
          <HomeCardItem nickName="정다정" />
          <HomeCardItem nickName="정다정" />
          <HomeCardItem nickName="정다정" />
          <HomeCardItem nickName="정다정" />
          <HomeCardItem nickName="정다정" />
          <HomeCardItem nickName="정다정" />
          <HomeCardItem nickName="정다정" />
          <HomeCardItem nickName="정다정" />
          <HomeCardItem nickName="정다정" />
        </HomeCardContainer>
      </HomeWrapper>
    </>
  );
}

const HomeWrapper = styled.section`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin: 0 auto;
`;

const HomeSearchContainer = styled.div`
  margin: 2rem;
`;

const HomeSearchForm = styled.form`
  position: relative;
  width: 100%;
  font-size: 0.9375rem;
  border: 0;
  border-radius: 0.5rem;
  outline: none;
  background-color: rgb(233, 233, 233);
  padding: 0.8rem;
  margin-top: 0.5rem;
`;

const SearchLabel = styled.label`
  font-size: 0.8rem;
`;

const SearchInputContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  font-size: ${(props) => props.theme.FS.m};
  width: 100%;
  background: transparent;
  padding: 1rem 1rem 1rem 2.5rem;
  &::placeholder {
    color: #00000046;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 0.5rem;
`;
const HomeCardContainer = styled.div`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  display: grid;
`;
