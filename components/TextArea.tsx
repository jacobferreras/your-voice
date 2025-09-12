import React from "react";
import { MAX_CHAR_LIMIT } from "@/lib/constant";
import useFeedbackStore from "@/store/useFeedbackStore";

const TextArea = () => {
  const text = useFeedbackStore((state) => state.text);
  const handleChange = useFeedbackStore((state) => state.handleChange);

  return (
    <textarea
      value={text}
      onChange={handleChange}
      placeholder="Success"
      className="textarea textarea-success w-auto lg:w-250  border-gray-600 bg-[#2c2c2c] text-white"
      maxLength={MAX_CHAR_LIMIT}
    ></textarea>
  );
};

export default TextArea;
