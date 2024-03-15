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
    photoBoothName: string;
    myEvent: boolean;
}

export interface CategoryPhotoBoothProps {
    photoBoothID: number;
    representativeImage: string;
    photoBoothName: string;
}

export interface PhotoBoothListData {
    id: number;
    logoImageUrl: string;
    name: string;
}
