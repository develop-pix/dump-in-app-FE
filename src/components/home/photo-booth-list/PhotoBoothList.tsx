import { memo } from 'react';

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

const PhotoBoothList = ({ data, filterData }: PhotoBoothListProps) => {
    const { photoBoothData, eventData, reviewData } = data;

    const allData: (PhotoBoothProps | EventProps | ReviewProps)[] = [];

    let photoBoothIndex = 0;
    let eventIndex = 0;
    let reviewIndex = 0;

    for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
        for (let i = 0; i < 6; i++) {
            if (i === 0) {
                allData.push(photoBoothData[photoBoothIndex]);
                photoBoothIndex++;
            } else if (i === 4) {
                allData.push(eventData[eventIndex]);
                eventIndex++;
            } else {
                allData.push(reviewData[reviewIndex]);
                reviewIndex++;
            }
        }
    }

    const renderColumns = () => {
        const columns = [];
        for (let i = 0; i < 3; i++) {
            columns.push(
                <PhotoBoothListContainer key={i}>
                    <PhotoBoothListColumnContainer>
                        {allData.slice(i * 6, i * 6 + 3).map((item, index) => {
                            const isFirstItem = index === 0;

                            if (isFirstItem) {
                                if (!item) {
                                    return <SeeNearPhotoBoothDummy key={index} />;
                                } else {
                                    return <PhotoBoothFrame key={index} data={item as PhotoBoothProps} />;
                                }
                            } else {
                                if (!item) {
                                    return <AddNewReviewDummy key={index} />;
                                } else {
                                    return (
                                        <ReviewFrame key={index} data={item as ReviewProps} filterData={filterData} />
                                    );
                                }
                            }
                        })}
                    </PhotoBoothListColumnContainer>
                    <PhotoBoothListColumnContainer>
                        {allData.slice(i * 6 + 3, i * 6 + 6).map((item, index) => {
                            const isSecondItem = index === 1;

                            if (isSecondItem) {
                                if (!item) {
                                    return <SeeMoreEventDummy key={index} />;
                                } else {
                                    return <EventFrame key={index} data={item as EventProps} />;
                                }
                            } else {
                                if (!item) {
                                    return <AddNewReviewDummy key={index} />;
                                } else {
                                    return (
                                        <ReviewFrame key={index} data={item as ReviewProps} filterData={filterData} />
                                    );
                                }
                            }
                        })}
                    </PhotoBoothListColumnContainer>
                </PhotoBoothListContainer>,
            );
        }
        return columns;
    };

    return <>{renderColumns()}</>;
};

export default memo(PhotoBoothList);
