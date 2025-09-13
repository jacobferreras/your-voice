import { create } from "zustand";
import { FeedbackType } from "../types/feedbackType";
import { postFeedback } from "../service/postFeedback";
import fetchFeedback from "@/service/fetchFeedback";

interface FeedbackStore {
  text: string;
  borderColor: string;
  feedbackItems: FeedbackType[];
  loading: boolean;
  selectedCompany?: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  remainingChars: (MAX_CHAR_LIMIT: number, text: string) => number;
  selectCompany: (company: string) => void;
  clearCompany: () => void;
  getAction: () => void;
  addAction: (text: string) => void;
}

const useFeedbackStore = create<FeedbackStore>((set) => ({
  text: "",

  borderColor: "border-gray-600",

  loading: true,

  feedbackItems: [] as FeedbackType[],

  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    set({ text: e.target.value });
  },

  remainingChars: (MAX_CHAR_LIMIT: number, text: string) =>
    MAX_CHAR_LIMIT - text.length,

  setFeedbackItems: (items: FeedbackType[]) => set({ feedbackItems: items }),

  selectCompany: (company: string) => set({ selectedCompany: company }),

  clearCompany: () => set({ selectedCompany: "" }),

  getAction: async () => {
    try {
      set({ loading: true });
      const feedbackItems = await fetchFeedback();
      set({ feedbackItems });
    } catch (error) {
    } finally {
      set({ loading: false });
    }
  },

  addAction: async (text: string) => {
    const companyRawName = text
      .split(" ")
      .find((word) => word.startsWith("#"))
      ?.substring(1);

    const companyName = companyRawName
      ? companyRawName.charAt(0).toUpperCase() +
        companyRawName.slice(1).toLowerCase()
      : "";

    if (text.trim() === "" || !companyName) {
      set({ borderColor: "border-red-600", text: "" });

      return;
    }

    set({ borderColor: "border-green-600", text: "" });

    const newItem = {
      id: Date.now(),
      upvoteCount: 0,
      company: companyName ? companyName.replace("#", "") : "Example Corp",
      daysAgo: 0,
      text,
      badgeLetter: companyName ? companyName.charAt(1).toUpperCase() : "E",
    };

    set((state) => ({ feedbackItems: [...state.feedbackItems, newItem] }));
    await postFeedback(newItem);
  },
}));

export default useFeedbackStore;
