import React from 'react';

function OneWord() {

  const wordArr = ["美味しいものが好きです🦀🦀🦀"];

  const getWordRandom = () => {
    return wordArr[0];
  };

  return (
    <div className="OneWord">
      <p>{getWordRandom()}</p>
    </div>
  );
}

export default OneWord;
