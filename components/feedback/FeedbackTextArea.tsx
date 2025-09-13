import React from "react";
import { MAX_CHAR_LIMIT } from "@/lib/constant";
import useFeedbackStore from "@/store/useFeedbackStore";

const FeedbackTextArea = () => {
  const text = useFeedbackStore((state) => state.text);
  const handleChange = useFeedbackStore((state) => state.handleChange);
  const borderColor = useFeedbackStore((state) => state.borderColor);

  return (
    <textarea
      value={text}
      onChange={handleChange}
      placeholder={`${
        borderColor === "border-red-600"
          ? "Please enter valid feedback with a #hashtag"
          : "Enter your feedback here..."
      }`}
      className={`textarea textarea-success w-full min-h-[120px] sm:min-h-[150px] md:min-h-[180px] ${borderColor} bg-[#2c2c2c] text-white px-2 sm:px-4`}
      maxLength={MAX_CHAR_LIMIT}
    ></textarea>
  );
};

export default FeedbackTextArea;
