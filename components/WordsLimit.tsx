import React from "react";

interface WordsLimitProps {
  remainingChars: number;
}

const WordsLimit = ({ remainingChars }: WordsLimitProps) => {
  return (
    <>
      <div className="text-left w-full pl-6">
        <p>{remainingChars} characters remaining</p>
      </div>
    </>
  );
};

export default WordsLimit;
