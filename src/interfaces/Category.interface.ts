export interface CategoryEventFilterProps {
  hashtags: string[];
  setHashtags: React.Dispatch<React.SetStateAction<string[]>>;
  filterOptionSelect: () => void;
}

export interface CategoryEventItemProps {
  eventData: CategoryEventProps;
}

export interface CategoryEventProps {
  eventID: number;
  representativeImage: string;
  eventTitle: string;
  startDate: string;
  endDate: string;
  photoboothName: string;
  myEvent: boolean;
}

export interface CategoryPhotoBoothProps {
  photoBoothID: number;
  representativeImage: string;
  photoboothName: string;
}
