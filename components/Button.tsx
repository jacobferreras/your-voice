import React from "react";
import usePostFeedback from "@/hooks/usePostFeedback";

const Button = () => {
  const { handlePostFeedback } = usePostFeedback();

  return (
    <div className="w-full flex justify-end pr-12">
      <button className="btn btn-success" onClick={handlePostFeedback}>
        Submit
      </button>
    </div>
  );
};

export default Button;
