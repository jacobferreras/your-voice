"use client";
import FeedbackItem from "./FeedbackItem";
import FeedbackItemSkeleton from "./FeedbackItemSkeleton";
import { FeedbackType } from "@/types/feedbackType";

interface FeedbackContainerProps {
  filterFeedbackByCompany: FeedbackType[];
  loading?: boolean;
}

const FeedbackContainer = ({
  filterFeedbackByCompany,
  loading,
}: FeedbackContainerProps) => {
  return (
    <>
      <div className="card bg-[#212121] text-neutral-content w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto overflow-y-scroll h-[56vh] px-2 sm:px-4 md:px-8">
        <div className="card-body items-center text-center">
          <ol className="menu gap-2 grid grid-cols-1">
            {loading &&
              Array.from({ length: 5 }).map((_, index) => (
                <FeedbackItemSkeleton key={index} />
              ))}
            {filterFeedbackByCompany.map((item: FeedbackType) => (
              <FeedbackItem
                key={item.id}
                upVoteCount={item.upvoteCount}
                companyName={item.company}
                daysAgo={item.daysAgo}
                text={item.text}
              />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default FeedbackContainer;
