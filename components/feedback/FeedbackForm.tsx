import FeedbackTextArea from "./FeedbackTextArea";
import FeedbackLimit from "./FeedbackLimit";
import FeedbackButton from "./FeedbackButton";

const FeedbackForm = () => {
  return (
    <>
      <div className="card bg-[#212121] text-neutral-content w-auto">
        <div className="card-body items-center text-center gap-4">
          <h2 className="text-center font-bold text-5xl">
            Give Feedback. Publicly.
          </h2>
          <p className="font-semibold text-xl">
            Enter your feedback here, remember to <b>#hashtag</b> the company..
          </p>
          <FeedbackTextArea />
          <FeedbackLimit />
          <FeedbackButton />
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
