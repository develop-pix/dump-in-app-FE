import { FilterProps } from './reuse/Filter.interface';

export interface HomeMenuBarProps {
    filterData: FilterProps;
    setFilterData: React.Dispatch<React.SetStateAction<FilterProps>>;
    onFilterSubmit: (newFilterData: FilterProps) => void;
}

export interface HomeSelectedFilterOptionProps {
    filterData: FilterProps;
}

export interface CollectionDataProps {
    photoBoothData: PhotoBoothProps[];
    eventData: EventProps[];
    reviewData: ReviewProps[];
}

export interface PhotoBoothListProps {
    data: CollectionDataProps;
}

export interface PhotoBoothFrameProps {
    data: PhotoBoothProps;
}

export interface EventFrameProps {
    data: EventProps;
}

export interface ReviewFrameProps {
    data: ReviewProps;
}

export interface PhotoBoothProps {
    photoBoothID: number;
    photoboothName: string;
    representativeImage: string;
}

export interface EventProps {
    eventID: number;
    representativeImage: string;
}

export interface ReviewProps {
    reviewID: number;
    branchName: string;
    representativeImage: string;
}
