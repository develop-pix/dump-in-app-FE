import React from 'react';
import {EventResultProps} from '../../../interfaces/HomeSearch.interface';
import SearchResultIcon from '../../../assets/image/reuse/search-result.png';
import {
  EventResultContainer,
  EventListIcon,
  EventListInfo,
  EventListText,
} from '../../../styles/layout/home-search/search-result/EventResult.style';

// 이벤트 클릭 시 이벤트 페이지로 이동할 로직 구현해야함, 결과 많아지면 스크롤뷰로, 검색어랑 일치하는 부분 흰색으로 표시할 로직 추가 예정
export default function EventResult({searchData, data}: EventResultProps) {
  return (
    <EventResultContainer>
      <EventListInfo>
        <EventListIcon source={SearchResultIcon} />
        <EventListText>{data.eventName}</EventListText>
      </EventListInfo>
    </EventResultContainer>
  );
}
