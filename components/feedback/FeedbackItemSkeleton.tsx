import React from "react";

const FeedbackItemSkeleton = () => {
  return (
    <li>
      <div className="card card-border bg-[#2a2a2a] w-270 flex flex-row animate-pulse">
        <div className="pt-4 ml-4">
          <div className="h-8 w-8 bg-gray-700 rounded" />
        </div>
        <div className="card-body text-start">
          <div className="h-6 w-32 bg-gray-700 rounded mb-2" />
          <div className="h-4 w-20 bg-gray-700 rounded mb-2" />
          <div className="h-4 w-48 bg-gray-700 rounded" />
        </div>
      </div>
    </li>
  );
};

export default FeedbackItemSkeleton;
