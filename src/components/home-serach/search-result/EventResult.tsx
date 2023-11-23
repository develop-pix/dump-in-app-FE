import React from 'react';
import {EventResultProps} from '../../../interfaces/HomeSearch.interface';
import SearchResultIcon from '../../../assets/image/reuse/search-result.png';
import {
  EventResultContainer,
  EventListIcon,
  EventListInfo,
  EventListText,
  HighlightedText,
} from '../../../styles/layout/home-search/search-result/EventResult.style';

// 이벤트 클릭 시 이벤트 페이지로 이동할 로직 구현해야함, 결과 많아지면 스크롤뷰로, 검색어랑 일치하는 부분 흰색으로 표시할 로직 추가 예정
export default function EventResult({searchData, data}: EventResultProps) {
  const index = data.eventName.indexOf(searchData);

  if (index === -1) {
    // 검색어가 이벤트 이름에 없는 경우도, 유사한 결과를 보여줄 수 있으므로 추가)
    return (
      <EventResultContainer>
        <EventListInfo>
          <EventListIcon source={SearchResultIcon} />
          <EventListText>{data.eventName}</EventListText>
        </EventListInfo>
      </EventResultContainer>
    );
  }

  // 검색어가 이벤트 이름에 있는 경우
  const beforeEventName = data.eventName.slice(0, index);
  const afterEventName = data.eventName.slice(index + searchData.length);

  return (
    <EventResultContainer>
      <EventListInfo>
        <EventListIcon source={SearchResultIcon} />
        <EventListText>
          {beforeEventName}
          <HighlightedText>{searchData}</HighlightedText>
          {afterEventName}
        </EventListText>
      </EventListInfo>
    </EventResultContainer>
  );
}
