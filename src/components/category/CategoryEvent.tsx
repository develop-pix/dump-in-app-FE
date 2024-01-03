import React, { useState } from 'react';

import { CategoryEventContainer } from '../../styles/layout/category/CategoryEvent.style';
import SearchNoData from '../reuse/alert/SearchNoData';

import CategoryEventFilter from './CategoryEventFilter';
import CategoryEventItem from './CategoryEventItem';

export default function CategoryEvent() {
    // 필터 데이터
    const [hashtags, setHashtags] = useState<string[]>([]);

    // 필터 옵션 선택시 호출되는 함수
    const filterOptionSelect = () => {
        // 서버에서 필터 적용한 데이터 가져와야함
        // 임시로 빈 데이터로 초기화
        setEventTempData([]);
    };

    // 임시 이벤트 데이터
    const [eventTmepData, setEventTempData] = useState(() =>
        Array(5)
            .fill(null)
            .map((_, index) => ({
                eventID: index + 1,
                representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                eventTitle: '화사의 ‘I Love My Body’ 프레임',
                startDate: '2023.09.07',
                endDate: '2023.10.31',
                photoboothName: '포토그레이',
                myEvent: true,
            })),
    );

    return (
        <CategoryEventContainer>
            <CategoryEventFilter
                hashtags={hashtags}
                setHashtags={setHashtags}
                filterOptionSelect={filterOptionSelect}
            />

            {eventTmepData.length > 0 ? (
                eventTmepData.map(eventData => <CategoryEventItem key={eventData.eventID} eventData={eventData} />)
            ) : (
                <SearchNoData
                    alertText="아직 등록된 이벤트가 없습니다."
                    recommendText="PUSH 알람을 허용하시면
        신규 이벤트 소식을 알려드려요."
                />
            )}
        </CategoryEventContainer>
    );
}
