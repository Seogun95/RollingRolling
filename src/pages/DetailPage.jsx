import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Layout/Sidebar";
export default function Detailpage() {
  return (
    <DetailWrapper>
      <Sidebar />

      <DetailContainer>
        <QuestionContainer>
          <StP>질문하기</StP>
          <textarea />
        </QuestionContainer>
        <MyQuestionContainer>
          <h2>내가 남긴 질문</h2>
          <MyQuestionBox />
          <Line />
        </MyQuestionContainer>
        <WrittenQuestionContainer>
          <h2> ~님에게 작성된 질문</h2>
          <WrittenQuestionBox></WrittenQuestionBox>
        </WrittenQuestionContainer>
      </DetailContainer>
    </DetailWrapper>
  );
}

const Line = styled.div`
  margin-top: 6%;
  box-shadow: 3px 0px 0px 3px ${(props) => props.theme.CL.scroll};
  width: 85%;
`;

const DetailWrapper = styled.div`
  ${(props) => props.theme.FlexRow};
  width: 100vw;
  height: 100vh;
`;

const DetailContainer = styled.div`
  background-color: ${(props) => props.theme.CL.brandColor};
  border-radius: 30px;
  width: 60vw;
  min-height: 90vh;
`;

const QuestionContainer = styled.div`
  ${(props) => props.theme.FlexRow};
  margin-top: 6%;
  flex-direction: column;

  textarea {
    width: 85%;
    min-height: 250px;
    border-radius: 1rem;
    padding: 1rem;
  }
`;

const MyQuestionContainer = styled.div`
  ${(props) => props.theme.FlexRow};
  margin-top: 6%;
  flex-direction: column;

  h2 {
    align-self: flex-start;
    margin: 0 0 1rem 4.5rem;
  }
`;
const MyQuestionBox = styled.div`
  width: 85%;
  min-height: 190px;
  border-radius: 1rem;

  background-color: white;
  overflow: auto;
`;

const WrittenQuestionContainer = styled.div`
  ${(props) => props.theme.FlexRow};
  margin-top: 5%;
  flex-direction: column;
  h2 {
    align-self: flex-start;
    margin: 0 0 1rem 4.5rem;
  }
`;

const WrittenQuestionBox = styled.div`
  font-size: 100px;
  width: 85%;
  min-height: 350px;
  border-radius: 1rem;
  background-color: white;
  overflow: auto;
`;

const StP = styled.p`
  font-size: 34px;
  margin: 0 0 1rem 4rem;
  align-self: flex-start;
`;
