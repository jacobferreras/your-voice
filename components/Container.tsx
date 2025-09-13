"use client";
import FeedbackForm from "./FeedbackForm";
import Sidebar from "./Sidebar";
import ListContainer from "./ListContainer";
import useFeedbackItems from "@/hooks/useFeedbackItems";

const Container = () => {
  const { filterFeedbackByCompany, loading, companyList } = useFeedbackItems();

  return (
    <>
      <div className="flex flex-row justify-center items-center h-screen bg-[#1a1a1a] gap-4 py-12">
        <div className="flex flex-col gap-4">
          <FeedbackForm />
          <ListContainer
            filterFeedbackByCompany={filterFeedbackByCompany}
            loading={loading}
          />
        </div>

        <Sidebar companyList={companyList} />
      </div>
    </>
  );
};

export default Container;
