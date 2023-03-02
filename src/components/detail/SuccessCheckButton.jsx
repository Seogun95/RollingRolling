import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';

function SuccessCheckButton(props) {
  return (
    <SuccessButtonContainer>
      <Button
        bg={'#58793e'}
        h={'2.8rem'}
        w={'100px'}
        size={'0.9rem'}
        color={'white'}
        onClick={props.click1}
      >
        {props.name1}
      </Button>
      <Button
        bg={'#58793e'}
        h={'2.8rem'}
        w={'100px'}
        size={'0.9rem'}
        color={'white'}
        onClick={props.click2}
      >
        {props.name2}
      </Button>
    </SuccessButtonContainer>
  );
}

export default SuccessCheckButton;

const SuccessButtonContainer = styled.div`
  ${(props) => props.theme.FlexRow};
  margin-top: 30px;
`;
