import { EventProps, PhotoBoothListProps, PhotoBoothProps, ReviewProps } from 'interfaces/Home.interface';
import {
    PhotoBoothListColumnContainer,
    PhotoBoothListContainer,
} from 'styles/layout/home/photo-booth-list/PhotoBoothList.style';

import EventFrame from './EventFrame';
import PhotoBoothFrame from './PhotoBoothFrame';
import ReviewFrame from './ReviewFrame';

export default function PhotoBoothList({ data }: PhotoBoothListProps) {
    const { photoBoothData, eventData, reviewData } = data;

    const allData: (PhotoBoothProps | EventProps | ReviewProps)[] = [];

    let photoBoothIndex = 0;
    let eventIndex = 0;
    let reviewIndex = 0;

    for (let i = 0; i < 12; i++) {
        if (i === 0 || i === 3) {
            allData.push(photoBoothData[photoBoothIndex]);
            photoBoothIndex = photoBoothIndex + 1;
        } else if (i === 7 || i === 10) {
            allData.push(eventData[eventIndex]);
            eventIndex = eventIndex + 1;
        } else {
            allData.push(reviewData[reviewIndex]);
            reviewIndex = reviewIndex + 1;
        }
    }

    return (
        <PhotoBoothListContainer>
            <PhotoBoothListColumnContainer>
                {allData.slice(0, 6).map((item, index) => {
                    if ('photoBoothID' in item) {
                        return <PhotoBoothFrame key={index} data={item as PhotoBoothProps} />;
                    } else if ('eventID' in item) {
                        return <EventFrame key={index} data={item as EventProps} />;
                    } else if ('reviewID' in item) {
                        return <ReviewFrame key={index} data={item as ReviewProps} />;
                    }
                })}
            </PhotoBoothListColumnContainer>
            <PhotoBoothListColumnContainer>
                {allData.slice(6, 12).map((item, index) => {
                    if ('photoBoothID' in item) {
                        return <PhotoBoothFrame key={index} data={item as PhotoBoothProps} />;
                    } else if ('eventID' in item) {
                        return <EventFrame key={index} data={item as EventProps} />;
                    } else if ('reviewID' in item) {
                        return <ReviewFrame key={index} data={item as ReviewProps} />;
                    }
                })}
            </PhotoBoothListColumnContainer>
        </PhotoBoothListContainer>
    );
}
