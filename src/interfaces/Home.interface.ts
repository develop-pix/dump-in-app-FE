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
    filterData: FilterProps;
}

export interface PhotoBoothFrameProps {
    data: PhotoBoothProps;
}

export interface EventFrameProps {
    data: EventProps;
}

export interface ReviewFrameProps {
    data: ReviewProps;
    prevReviewID: number | undefined;
    filterData?: FilterProps;
}

export interface PhotoBoothProps {
    id: number;
    name: string;
    mainThumbnailImageUrl: string;
}

export interface EventProps {
    id: number;
    title: string;
    mainThumbnailImageUrl: string;
}

export interface ReviewProps {
    id: number;
    photoBoothName: string;
    mainThumbnailImageUrl: string;
}
