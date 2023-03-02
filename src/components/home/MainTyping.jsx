import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import styled from 'styled-components';
//npm i react-typing-effect
const TypingTitle = styled.h1`
  text-shadow: 2px 2px 6px black;
`;

export default function MainTyping() {
  return (
    <>
      <ReactTypingEffect
        text={['친구에게 롤링 페이퍼를', '롤링롤링']}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        speed={100}
        eraseSpeed={50}
        eraseDelay={1500}
        typingDelay={1000}
        displayTextRenderer={(text, i) => {
          return (
            <TypingTitle>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return <span key={key}>{char}</span>;
              })}
            </TypingTitle>
          );
        }}
      />
    </>
  );
}
