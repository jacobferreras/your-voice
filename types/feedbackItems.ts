export interface FeedbackItem {
  id: number;
  upvoteCount: number;
  company: string;
  daysAgo: number;
  text: string;
  badgeLetter?: string;
}
