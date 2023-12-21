export interface ReviewData {
  reviewID: number;
  representativeImage: string;
  hashtag: string[];
  description: string;
  date: Date;
  my_review: boolean;
  mine: boolean;
  photoboothName: string;
  branchName: string;
}

export interface ReviewDescriptionProps {
  date: Date;
  description: string;
  hashtag: string[];
}

export interface ReviewManageModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  reviewID: number;
}
