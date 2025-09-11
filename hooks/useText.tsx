"use client";
import { useState } from "react";

const useText = () => {
  const [text, setText] = useState("");
  let remainingChars = 150 - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return { text, handleChange, remainingChars };
};

export default useText;
