import { postFeedback } from "@/service/postFeedback";
import useFeedbackStore from "@/store/useFeedbackStore";

const usePostFeedback = () => {
  const addFeedbackItem = useFeedbackStore((state) => state.addFeedbackItem);
  const text = useFeedbackStore((state) => state.text);

  const handlePostFeedback = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const companyName = text.split(" ").find((word) => word.startsWith("#"));
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

  return { handlePostFeedback };
};

export default usePostFeedback;
