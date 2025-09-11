import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="card card-border bg-[#212121] w-96 h-216">
        <div className="card-body">
          <ul className="menu gap-4 grid grid-cols-3">
            <li>
              <button className="btn btn-soft rounded-xl  w-20">
                #YouTube
              </button>
            </li>
            <li>
              <button className="btn btn-soft rounded-xl w-20">#Nike</button>
            </li>
            <li>
              <button className="btn btn-soft rounded-xl w-20">#Apple</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
