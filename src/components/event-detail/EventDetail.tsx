import { useState } from 'react';
import { ScrollView } from 'react-native';

import EventFrame from './EventFrame';
import EventImageTitle from './EventImageTitle';
import EventInfo from './EventInfo';

export default function EventDetail() {
    // 임시 데이터, 이벤트 아이디 값의 데이터를 서버에서 가져옴
    const [eventData, setEventData] = useState({
        representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        eventTitle: '인생네컷 6월 디즈니 프레임',
        descriptionTitle: '인생네컷 6월 디즈니 프레임 공개!',
        description:
            '엉뚱발랄한 귀염둥이 포키와 토이스토리 친구들의 찐한 우정을 함께 나눠보세요. 몬스터 주식회사의 마이크, 설리반과 함께 넘치는 웃음에너지까지!',
        hashtag: ['레드프레임', '컨셉사진', '레드'],
        startDate: '2022-05-31',
        endDate: '2022-06-30',
        frameImage: [
            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        ],
        myEvent: true,
    });

    return (
        <ScrollView>
            <EventImageTitle
                eventData={{
                    representativeImage: eventData.representativeImage,
                    eventTitle: eventData.eventTitle,
                    hashtag: eventData.hashtag,
                    myEvent: eventData.myEvent,
                }}
            />
            <EventInfo
                eventData={{
                    descriptionTitle: eventData.descriptionTitle,
                    description: eventData.description,
                    startDate: eventData.startDate,
                    endDate: eventData.endDate,
                }}
            />
            <EventFrame
                eventData={{
                    frameImage: eventData.frameImage,
                }}
            />
        </ScrollView>
    );
}
