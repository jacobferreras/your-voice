import { postFeedback } from "@/service/postFeedback";
import useFeedbackStore from "@/store/useFeedbackStore";

const usePostFeedback = () => {
  const addFeedbackItem = useFeedbackStore((state) => state.addFeedbackItem);
  const text = useFeedbackStore((state) => state.text);
  const borderColor = useFeedbackStore((state) => state.borderColor);
  const setBorderColor = useFeedbackStore((state) => state.setBorderColor);
  const setText = useFeedbackStore((state) => state.setText);

  const handlePostFeedback = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const companyRawName = text
      .split(" ")
      .find((word) => word.startsWith("#"))
      ?.substring(1);

    const companyName = companyRawName
      ? companyRawName.charAt(0).toUpperCase() +
        companyRawName.slice(1).toLowerCase()
      : "";

    if (text.trim() === "" || !companyName) {
      setBorderColor("border-red-600");
      setText("");
      return;
    }

    setBorderColor("border-green-600");
    setText("");

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
  };

  return { handlePostFeedback, borderColor };
};

export default usePostFeedback;
