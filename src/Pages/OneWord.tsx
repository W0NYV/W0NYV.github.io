import React from 'react';

function OneWord() {

  const wordArr: string[] = ["美味しいものが好きです🦀🦀🦀", "こんにちは", "にゃーお"];

  const getWordRandom = () => {
    return wordArr[Math.floor(Math.random() * wordArr.length)];
  };

  return (
    <div className="OneWord">
      <p>{getWordRandom()}</p>
    </div>
  );
}

export default OneWord;
