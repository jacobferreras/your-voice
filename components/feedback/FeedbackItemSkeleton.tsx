import React from "react";

const FeedbackItemSkeleton = () => {
  return (
    <li>
      <div className="card card-border bg-[#2a2a2a] w-[600px] mx-auto p-4 flex flex-row gap-4 items-start">
        {/* Left: Number skeleton */}
        <div className="flex flex-col items-center pt-12">
          <div className="h-8 w-12 bg-green-800 rounded mb-2" />
        </div>
        {/* Right: Content skeleton */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-5 w-24 bg-gray-700 rounded" /> {/* Username */}
          <div className="h-4 w-16 bg-gray-700 rounded" /> {/* Date */}
          <div className="mt-2 flex flex-col gap-2">
            <div className="h-4 w-5/6 bg-gray-700 rounded" />
            <div className="h-4 w-full bg-gray-700 rounded" />
            <div className="h-4 w-2/3 bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default FeedbackItemSkeleton;
