import React from "react";
import { MAX_CHAR_LIMIT } from "@/lib/constant";

interface TextAreaProps {
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ text, handleChange }: TextAreaProps) => {
  return (
    <textarea
      value={text}
      onChange={handleChange}
      placeholder="Success"
      className="textarea textarea-success w-auto lg:w-200  border-gray-600 bg-[#2c2c2c] text-white"
      maxLength={MAX_CHAR_LIMIT}
    ></textarea>
  );
};

export default TextArea;
