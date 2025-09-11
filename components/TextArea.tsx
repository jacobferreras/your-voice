import React from "react";

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
      className="textarea textarea-success w-auto lg:w-200"
      maxLength={150}
    ></textarea>
  );
};

export default TextArea;
