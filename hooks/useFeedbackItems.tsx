"use client";
import fetchFeedback from "@/service/fetchFeedback";
import { useState, useEffect } from "react";

const useFeedbackItems = () => {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFeedbackItems = async () => {
      try {
        setLoading(true);
        const feedbackItems = await fetchFeedback();
        setFeedbackItems(feedbackItems);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getFeedbackItems();
  }, []);

  return { feedbackItems, loading };
};

export default useFeedbackItems;
