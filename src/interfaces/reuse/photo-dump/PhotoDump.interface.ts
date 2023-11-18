export interface PhotoDumpProps {
  reviewData: ReviewData[];
}

interface ReviewData {
  reviewID: number;
  representativeImage: string;
  hashtag: string[];
  description: string;
}
