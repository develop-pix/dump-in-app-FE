import {FilterProps} from './reuse/Filter.interface';

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
  'photobooth-name': string;
  'representative-image': string;
  'my-photobooth': boolean;
}

export interface EventProps {
  eventID: number;
  'representative-image': string;
  'new-event': boolean;
}

export interface ReviewProps {
  reviewID: number;
  'branch-name': string;
  'representative-image': string;
}
