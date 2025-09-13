"use client";
import ListItem from "./ListItem";
import ListItemSkeleton from "./ListItemSkeleton";
import { FeedbackItem } from "@/types/feedbackItems";

interface ListContainerProps {
  filterFeedbackByCompany: FeedbackItem[];
  loading?: boolean;
}

const ListContainer = ({
  filterFeedbackByCompany,
  loading,
}: ListContainerProps) => {
  return (
    <>
      <div className="card bg-[#212121] text-neutral-content w-auto overflow-y-scroll h-[56vh] ">
        <div className="card-body items-center text-center">
          <ol className="menu gap-2 grid grid-cols-1">
            {loading &&
              Array.from({ length: 5 }).map((_, index) => (
                <ListItemSkeleton key={index} />
              ))}
            {filterFeedbackByCompany.map((item: FeedbackItem) => (
              <ListItem
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

export default ListContainer;
