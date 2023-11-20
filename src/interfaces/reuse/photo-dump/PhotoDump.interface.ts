export interface PhotoDumpProps {
  reviewData: ReviewData[];
}

export interface ReviewData {
  reviewID: number;
  representativeImage: string;
  hashtag: string[];
  description: string;
}
