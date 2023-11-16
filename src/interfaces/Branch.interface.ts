export interface BranchData {
  branchID: number;
  branchName: string;
  branchHashtag: string[];
  photoBoothName: string;
  geolocation: number[];
  open: string;
  distance: number;
  address: string;
  image: string[];
  myBranch: boolean;
  review: ReviewData[];
}

interface ReviewData {
  reviewID: number;
  representativeImage: string;
  hashtag: string[];
  description: string;
}

export interface BranchLocationProps {
  geolocation: number[];
  distance: number;
}

export interface BranchInfoProps {
  photoboothName: string;
  branchName: string;
  branchHashtag: string[];
  address: string;
  open: string;
  myBranch: boolean;
}

export interface BranchTitleProps {
  photoboothName: string;
  branchName: string;
  branchHashtag: string[];
  myBranch: boolean;
}

export interface BranchDescriptionProps {
  address: string;
  open: string;
}
