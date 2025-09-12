import React from "react";

const ListItem = () => {
  return (
    <>
      <li>
        <div className="card card-border bg-[#2a2a2a] w-auto flex flex-row">
          <h2 className="pt-4 ml-4 text-2xl">539</h2>
          <div className="card-body text-start">
            <h2 className="card-title font-bold">Starbucks</h2>
            <h3>4 days ago</h3>
            <p>
              I really wish #Starbucks would use hand wrappers for hot drinks as
              a standard, I keep burning my hands and am tired of bothering the
              employee.
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default ListItem;
