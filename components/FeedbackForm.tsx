import React from "react";
import TextArea from "./TextArea";
import WordsLimit from "./WordsLimit";
import Button from "./Button";
import useFeedbackStore from "@/store/useFeedbackStore";
const FeedbackForm = () => {
  const text = useFeedbackStore((state) => state.text);
  const handleChange = useFeedbackStore((state) => state.handleChange);
  const remainingChars = useFeedbackStore((state) =>
    state.remainingChars(280, state.text)
  );
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
