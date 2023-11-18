import {CollectionProps} from './PhotoBoothList.interface';

export interface HomeSearchProps {
  onRecentListClick: (search: string) => void;
}

export interface ReviewSearchEtcProps {
  data: string;
}

export interface SearchResultsProps {
  searchData: string;
  eventData: EventDataProps[];
  photoDumpData: CollectionProps[];
}

// 이벤트 데이터 타입
export interface EventDataProps {
  eventID: number;
  eventName: string;
}

export interface EventResultProps {
  searchData: string;
  data: EventDataProps;
}

export interface RecentSearchItemProps {
  search: string;
  order: number;
}
