"use client";
import { useState } from "react";
import { MAX_CHAR_LIMIT } from "@/lib/constant";

const useText = () => {
  const [text, setText] = useState("");
  let remainingChars = MAX_CHAR_LIMIT - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return { text, handleChange, remainingChars };
};

export default useText;
