import AddNewReviewDummy from 'components/reuse/dummy/AddNewReviewDummy';
import SeeMoreEventDummy from 'components/reuse/dummy/SeeMoreEventDummy';
import SeeNearPhotoBoothDummy from 'components/reuse/dummy/SeeNearPhotoBoothDummy';
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

    const columnNumber = Math.max(photoBoothData.length, eventData.length, Math.ceil(reviewData.length / 8));

    const allData: (PhotoBoothProps | EventProps | ReviewProps)[] = [];

    let photoBoothIndex = 0;
    let eventIndex = 0;
    let reviewIndex = 0;

    for (let i = 0; i < 6; i++) {
        if (i === 0) {
            allData.push(photoBoothData[photoBoothIndex]);
            photoBoothIndex = photoBoothIndex + 1;
        } else if (i === 4) {
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
                {allData.slice(0, 3).map((item, index) => {
                    if (index === 0) {
                        if (item === undefined) {
                            return <SeeNearPhotoBoothDummy key={index} />;
                        } else {
                            return <PhotoBoothFrame key={index} data={item as PhotoBoothProps} />;
                        }
                    } else {
                        if (item === undefined) {
                            return <AddNewReviewDummy key={index} />;
                        } else {
                            return <ReviewFrame key={index} data={item as ReviewProps} />;
                        }
                    }
                })}
            </PhotoBoothListColumnContainer>
            <PhotoBoothListColumnContainer>
                {allData.slice(3, 6).map((item, index) => {
                    if (index === 1) {
                        if (item === undefined) {
                            return <SeeMoreEventDummy key={index} />;
                        } else {
                            return <EventFrame key={index} data={item as EventProps} />;
                        }
                    } else {
                        if (item === undefined) {
                            return <AddNewReviewDummy key={index} />;
                        } else {
                            return <ReviewFrame key={index} data={item as ReviewProps} />;
                        }
                    }
                })}
            </PhotoBoothListColumnContainer>
        </PhotoBoothListContainer>
    );
}
