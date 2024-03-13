import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { GetEventData } from 'hooks/axios/EventDetail';
import { EventData } from 'interfaces/EventDetail.interface';
import { CategoryStackScreenProps } from 'interfaces/Navigation.interface';

import EventFrame from './EventFrame';
import EventImageTitle from './EventImageTitle';
import EventInfo from './EventInfo';

export default function EventDetail() {
    const route = useRoute<CategoryStackScreenProps<'EventDetail'>['route']>();

    const [eventData, setEventData] = useState<EventData>({
        id: undefined,
        title: '',
        content: '',
        mainThumbnailImageUrl: '',
        startDate: '',
        endDate: '',
        isLiked: false,
        hashtag: [],
        image: [],
    });

    // EventDetail 페이지 진입시 이벤트 정보 Get
    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const resultData = await GetEventData(route.params.eventID);
                if (resultData.data) {
                    setEventData(resultData.data);
                }
            } catch (error) {
                console.log('fetchEventDataError ' + error);
            }
        };
        fetchEventData();
    }, [route.params.eventID]);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <EventImageTitle
                mainThumbnailImageUrl={eventData.mainThumbnailImageUrl}
                title={eventData.title}
                hashtag={eventData.hashtag}
                isLiked={eventData.isLiked}
            />
            <EventInfo
                title={eventData.title}
                content={eventData.content}
                startDate={eventData.startDate}
                endDate={eventData.endDate}
            />
            <EventFrame image={eventData.image} />
        </ScrollView>
    );
}
