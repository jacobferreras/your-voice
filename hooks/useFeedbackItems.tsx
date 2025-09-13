"use client";
import fetchFeedback from "@/service/fetchFeedback";
import { useEffect, useState } from "react";
import useFeedbackStore from "@/store/useFeedbackStore";

const useFeedbackItems = () => {
  const feedbackItems = useFeedbackStore((state) => state.feedbackItems);
  const loading = useFeedbackStore((state) => state.loading);
  const setFeedbackItems = useFeedbackStore((state) => state.setFeedbackItems);
  const setLoading = useFeedbackStore((state) => state.setLoading);
  const [selectedCompany, setSelectedCompany] = useState("");

  const filterFeedbackByCompany = selectedCompany
    ? feedbackItems.filter((item) => item.company === selectedCompany)
    : feedbackItems;

  const handelSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

  const companyList = feedbackItems
    .map((item) => item.company)
    .filter((company, index, self) => self.indexOf(company) === index);

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

  return { filterFeedbackByCompany, loading, companyList, handelSelectCompany };
};

export default useFeedbackItems;
