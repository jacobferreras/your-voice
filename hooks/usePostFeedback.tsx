import { postFeedback } from "@/service/postFeedback";
import useFeedbackStore from "@/store/useFeedbackStore";
import { useState } from "react";

const usePostFeedback = () => {
  const addFeedbackItem = useFeedbackStore((state) => state.addFeedbackItem);
  const text = useFeedbackStore((state) => state.text);
  const borderColor = useFeedbackStore((state) => state.borderColor);
  const setBorderColor = useFeedbackStore((state) => state.setBorderColor);
  const setText = useFeedbackStore((state) => state.setText);

  const handlePostFeedback = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const companyName = text.split(" ").find((word) => word.startsWith("#"));
    if (text.trim() === "" || !companyName) {
      setBorderColor("border-red-600");
      setText("");
      return;
    }

    const newItem = {
      id: Date.now(),
      upvoteCount: 0,
      company: companyName ? companyName.replace("#", "") : "Example Corp",
      daysAgo: 0,
      text,
      badgeLetter: companyName ? companyName.charAt(1).toUpperCase() : "E",
    };
    addFeedbackItem(newItem);
    await postFeedback(newItem);
    setText("");
  };

  return { handlePostFeedback, borderColor };
};

export default usePostFeedback;
