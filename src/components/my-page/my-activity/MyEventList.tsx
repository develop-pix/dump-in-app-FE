import PhotoBoothEventFrame from 'components/photo-booth-detail/PhotoBoothEventFrame';
import { MyEventListContainer } from 'styles/layout/my-page/MyActivity/MyEventList.style';

export default function MyEventList() {
    const eventTempData = Array(5)
        .fill(null)
        .map((_, index) => ({
            eventID: index + 1,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            eventTitle: '화사의 ‘I Love My Body’ 프레임',
            startDate: '2023.09.07',
            endDate: '2023.10.31',
            photoBoothName: '포토그레이',
            myEvent: true,
        }));

    return (
        <MyEventListContainer>
            {eventTempData.map(eventData => (
                <PhotoBoothEventFrame key={eventData.eventID} event={eventData} />
            ))}
        </MyEventListContainer>
    );
}
