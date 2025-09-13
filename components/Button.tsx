import React from "react";

import useFeedbackStore from "@/store/useFeedbackStore";

const Button = () => {
  const addAction = useFeedbackStore((state) => state.addAction);
  const text = useFeedbackStore((state) => state.text);

  return (
    <div className="w-full flex justify-end pr-12">
      <button className="btn btn-success" onClick={() => addAction(text)}>
        Submit
      </button>
    </div>
  );
};

export default Button;
