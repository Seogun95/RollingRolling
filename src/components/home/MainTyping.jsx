import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
//npm i react-typing-effect

export default function MainTyping() {
  return (
    <>
      <ReactTypingEffect
        text={['친구에게 롤링 페이퍼로', '롤링롤링']}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        speed={150}
        eraseSpeed={50}
        cursorColor={'black'}
        displayTextRenderer={(text, i) => {
          return (
            <h1 style={{ color: 'white' }}>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return <span key={key}>{char}</span>;
              })}
            </h1>
          );
        }}
      />
    </>
  );
}
