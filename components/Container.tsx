"use client";
import FeedbackForm from "../components/feedback/FeedbackForm";
import Sidebar from "./sidebar/Sidebar";
import FeedbackContainer from "./feedback/FeedbackContainer";
import useFeedbackItems from "@/hooks/useFeedbackItems";

const Container = () => {
  const { filterFeedbackByCompany, loading, companyList } = useFeedbackItems();

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-stretch min-h-screen bg-[#1a1a1a] gap-4 py-12 px-2 sm:px-4">
        <div className="flex flex-col gap-4 w-full lg:w-auto">
          <FeedbackForm />
          <FeedbackContainer
            filterFeedbackByCompany={filterFeedbackByCompany}
            loading={loading}
          />
        </div>
        <div className="w-full lg:w-auto">
          <Sidebar companyList={companyList} />
        </div>
      </div>
    </>
  );
};

export default Container;
