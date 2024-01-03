import React from 'react';

import { MyEventListContainer } from '../../../styles/layout/my-page/MyActivity/MyEventList.style';
import PhotoBoothEventFrame from '../../photobooth-detail/PhotoBoothEventFrame';

export default function MyEventList() {
    const eventTmepData = Array(5)
        .fill(null)
        .map((_, index) => ({
            eventID: index + 1,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            eventTitle: '화사의 ‘I Love My Body’ 프레임',
            startDate: '2023.09.07',
            endDate: '2023.10.31',
            photoboothName: '포토그레이',
            myEvent: true,
        }));

    return (
        <MyEventListContainer>
            {eventTmepData.map(eventData => (
                <PhotoBoothEventFrame key={eventData.eventID} event={eventData} />
            ))}
        </MyEventListContainer>
    );
}
