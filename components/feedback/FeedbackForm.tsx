import FeedbackTextArea from "./FeedbackTextArea";
import FeedbackLimit from "./FeedbackLimit";
import FeedbackButton from "./FeedbackButton";

const FeedbackForm = () => {
  return (
    <>
      <div className="card bg-[#212121] text-neutral-content w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4 md:px-8">
        <div className="card-body items-center text-center gap-4">
          <h2 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl">
            Give Feedback. Publicly.
          </h2>
          <p className="font-semibold text-base sm:text-lg md:text-xl">
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
