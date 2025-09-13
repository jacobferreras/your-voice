import axios from "axios";
import { FeedbackItem } from "../types/feedbackType";

export const postFeedback = async (item: FeedbackItem) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}`, {
      ...item,
    });
    const data = response.data.feedbacks;
    return data;
  } catch (error) {
    console.error("Error posting feedback:", error);
    throw error;
  }
};
