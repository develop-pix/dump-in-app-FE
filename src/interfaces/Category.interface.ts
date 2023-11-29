export interface CategoryEventFilterProps {
  hashtags: string[];
  setHashtags: React.Dispatch<React.SetStateAction<string[]>>;
  filterOptionSelect: () => void;
}

export interface CategoryEventItemProps {
  eventData: {
    eventID: number;
    representativeImage: string;
    eventTitle: string;
    startDate: string;
    endDate: string;
    photoboothName: string;
    myEvent: boolean;
  };
}
