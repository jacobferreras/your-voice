import React from "react";

interface ListItemProps {
  upVoteCount: number;
  companyName: string;
  daysAgo: number;
  text: string;
}

const FeedbackItem = ({
  upVoteCount,
  companyName,
  daysAgo,
  text,
}: ListItemProps) => {
  return (
    <li>
      <div className="card card-border bg-[#2a2a2a] flex flex-row w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto p-2 sm:p-4 md:p-6 gap-4">
        <h2 className="pt-2 sm:pt-4 ml-2 sm:ml-4 text-lg sm:text-2xl font-bold min-w-[2.5rem] text-green-400 flex items-center justify-center">
          {upVoteCount}
        </h2>
        <div className="card-body text-start p-0">
          <h2 className="card-title font-bold text-base sm:text-lg md:text-xl">
            {companyName}
          </h2>
          <h3 className="text-xs sm:text-sm md:text-base text-gray-400">
            {daysAgo === 0 ? "NEW" : `${daysAgo} days ago`}
          </h3>
          <p className="text-sm sm:text-base md:text-lg break-words">{text}</p>
        </div>
      </div>
    </li>
  );
};

export default FeedbackItem;
