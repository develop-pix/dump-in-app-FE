import {ReviewProps} from './Home.interface';

export interface HomeSearchProps {
  onRecentListClick: (search: string) => void;
}

export interface ReviewSearchEtcProps {
  data: string;
}

export interface SearchResultProps {
  searchData: string;
  eventData: {
    eventData: EventDataProps[];
    finishedEvent: boolean;
  };
  photoDumpData: ReviewProps[];
}

// 홈-검색 이벤트 데이터 타입
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
