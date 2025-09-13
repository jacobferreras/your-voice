import React from "react";

import useFeedbackStore from "@/store/useFeedbackStore";

const FeedbackButton = () => {
  const addAction = useFeedbackStore((state) => state.addAction);
  const text = useFeedbackStore((state) => state.text);

  return (
    <div className="w-full flex justify-end ">
      <button
        className="btn btn-success min-w-[100px] sm:min-w-[120px] md:min-w-[140px]"
        onClick={() => addAction(text)}
      >
        Submit
      </button>
    </div>
  );
};

export default FeedbackButton;
