import { title } from "process";
import React from "react";

interface ListItemProps {
  upVoteCount: number;
  companyName: string;
  daysAgo: number;
  text: string;
}

const ListItem = ({
  upVoteCount,
  companyName,
  daysAgo,
  text,
}: ListItemProps) => {
  return (
    <>
      <li>
        <div className="card card-border bg-[#2a2a2a] w-auto flex flex-row">
          <h2 className="pt-4 ml-4 text-2xl">{upVoteCount}</h2>
          <div className="card-body text-start">
            <h2 className="card-title font-bold">{companyName}</h2>
            <h3>{daysAgo === 0 ? "NEW" : `${daysAgo} days ago`}</h3>
            <p>{text}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default ListItem;
