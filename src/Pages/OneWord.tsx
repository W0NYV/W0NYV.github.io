import React from 'react';

function OneWord() {

  const wordArr: string[] = ["美味しいものが好きです🦀🦀🦀", "YOOOOOOOOOOOOOOOO!!!"];

  const getWordRandom = () => {
    return wordArr[Math.floor(Math.random() * wordArr.length)];
  };

  return (
    <div className="OneWord">
      <p className="mt-2 text-white">{getWordRandom()}</p>
    </div>
  );
}

export default OneWord;
