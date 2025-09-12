"use client";
import ListItem from "./ListItem";
import ListItemSkeleton from "./ListItemSkeleton";
import useFeedbackItems from "@/hooks/useFeedbackItems";

interface FeedbackItem {
  id: number;
  upvoteCount: number;
  company: string;
  daysAgo: string;
  text: string;
}

const ListContainer = () => {
  const { feedbackItems, loading } = useFeedbackItems();
  console.log(feedbackItems);
  return (
    <>
      <div className="card bg-[#212121] text-neutral-content w-auto overflow-y-scroll h-[56vh] ">
        <div className="card-body items-center text-center">
          <ol className="menu gap-2 grid grid-cols-1">
            {loading &&
              Array.from({ length: 5 }).map((_, index) => (
                <ListItemSkeleton key={index} />
              ))}
            {feedbackItems.map((item: FeedbackItem) => (
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
