import axios from "axios";

const fetchFeedback = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
    const data = response.data.feedbacks;
    return data;
  } catch (error) {
    console.error("Error fetching feedback:", error);
  }
};
export default fetchFeedback;
