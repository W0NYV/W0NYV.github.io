import React from 'react';

function OneWord() {

  const wordArr: string[] = ["美味しいものが好きです🦀🦀🦀", "こんにちは", "にゃーお", "YOOOOOOOOOOOOOOOO!!!", "Hi"];

  const getWordRandom = () => {
    return wordArr[Math.floor(Math.random() * wordArr.length)];
  };

  return (
    <div className="OneWord">
      <p className="text-white">{getWordRandom()}</p>
    </div>
  );
}

export default OneWord;
