export interface CategoryEventFilterProps {
    hashtags: string[];
    setHashtags: React.Dispatch<React.SetStateAction<string[]>>;
    filterOptionSelect: () => void;
}

export interface CategoryEventItemProps {
    eventData: CategoryEventList;
}

export interface CategoryEventList {
    id: number;
    title: string;
    mainThumbnailImageUrl: string;
    startDate: string;
    endDate: string;
    isLiked: boolean;
    photoBoothBrandName: string;
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
