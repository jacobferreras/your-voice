import axios from "axios";

export const postFeedback = async () => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}`, {
      upvoteCount: 0,
      company: "",
      daysAgo: "",
      text: "",
    });
    const data = response.data.feedbacks;
    return data;
  } catch (error) {
    console.error("Error posting feedback:", error);
    throw error;
  }
};
1;
