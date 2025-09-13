import React from "react";
import useFeedbackStore from "@/store/useFeedbackStore";
import { MAX_CHAR_LIMIT } from "@/lib/constant";

const FeedbackLimit = () => {
  const remainingChars = useFeedbackStore((state) =>
    state.remainingChars(MAX_CHAR_LIMIT, state.text)
  );

  return (
    <>
      <div className="text-left w-full pl-12">
        <p>{remainingChars} characters remaining</p>
      </div>
    </>
  );
};

export default FeedbackLimit;
