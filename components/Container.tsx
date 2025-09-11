import React from "react";
import FeedbackForm from "./FeedbackForm";
import Sidebar from "./Sidebar";

const Container = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center h-screen bg-[#1a1a1a] gap-4 py-12">
        <FeedbackForm />
        <Sidebar />
      </div>
    </>
  );
};

export default Container;
