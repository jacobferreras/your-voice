"use client";
import React from "react";
import TextArea from "./TextArea";
import WordsLimit from "./WordsLimit";
import Button from "./Button";
import useText from "@/hooks/useText";

const FeedbackForm = () => {
  const { text, handleChange, remainingChars } = useText();

  return (
    <>
      <div className="card bg-[#212121] text-neutral-content w-auto">
        <div className="card-body items-center text-center gap-4">
          <h2 className="text-center font-bold text-5xl">
            Give Feedback. Publicly.
          </h2>
          <p className="font-semibold text-xl">
            Enter your feedback here, remember to <b>#hashtag</b> the company..
          </p>
          <TextArea text={text} handleChange={handleChange} />
          <WordsLimit remainingChars={remainingChars} />
          <Button />
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
