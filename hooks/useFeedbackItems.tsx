"use client";
import fetchFeedback from "@/service/fetchFeedback";
import { useEffect } from "react";
import useFeedbackStore from "@/store/useFeedbackStore";

const useFeedbackItems = () => {
  const feedbackItems = useFeedbackStore((state) => state.feedbackItems);
  const loading = useFeedbackStore((state) => state.loading);
  const setFeedbackItems = useFeedbackStore((state) => state.setFeedbackItems);
  const setLoading = useFeedbackStore((state) => state.setLoading);

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
