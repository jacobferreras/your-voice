"use client";
import { useEffect, useMemo } from "react";
import useFeedbackStore from "@/store/useFeedbackStore";

const useFeedbackItems = () => {
  const feedbackItems = useFeedbackStore((state) => state.feedbackItems);
  const loading = useFeedbackStore((state) => state.loading);
  const selectedCompany = useFeedbackStore((state) => state.selectedCompany);
  const getAction = useFeedbackStore((state) => state.getAction);

  const filterFeedbackByCompany = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter((item) => item.company === selectedCompany)
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, self) => self.indexOf(company) === index),
    [feedbackItems]
  );

  useEffect(() => {
    getAction();
  }, []);

  return {
    filterFeedbackByCompany,
    loading,
    companyList,
  };
};

export default useFeedbackItems;
