import { create } from "zustand";
import { FeedbackItem } from "../types/feedbackItems";

interface FeedbackStore {
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  remainingChars: (MAX_CHAR_LIMIT: number, text: string) => number;
  feedbackItems: FeedbackItem[];
  loading: boolean;
  setFeedbackItems: (items: FeedbackItem[]) => void;
  setLoading: (loading: boolean) => void;
  addFeedbackItem: (item: FeedbackItem) => void;
}

const useFeedbackStore = create<FeedbackStore>((set) => ({
  text: "",
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    set({ text: e.target.value });
  },
  remainingChars: (MAX_CHAR_LIMIT: number, text: string) =>
    MAX_CHAR_LIMIT - text.length,
  feedbackItems: [] as FeedbackItem[],
  loading: true,
  setFeedbackItems: (items: FeedbackItem[]) => set({ feedbackItems: items }),
  setLoading: (loading) => set({ loading }),
  addFeedbackItem: (item: FeedbackItem) =>
    set((state) => ({ feedbackItems: [...state.feedbackItems, item] })),
}));

export default useFeedbackStore;
