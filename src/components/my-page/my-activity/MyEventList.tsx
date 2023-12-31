import React, {useState, useEffect} from 'react';
import PhotoBoothEventFrame from '../../photobooth-detail/PhotoBoothEventFrame';
import {MyEventListContainer} from '../../../styles/layout/my-page/MyActivity/MyEventList.style';
import {EventDataType} from '../../../interfaces/PhotoBoothDetail.interface';
import SkeletonMyPageEvent from '../../reuse/skeleton/SkeletonMyPageEvent';
import SkeletonGetMoreMyPageEvent from '../../reuse/skeleton/SkeletonGetMoreMyPageEvent';
import {FlatList} from 'react-native';

export default function MyEventList() {
  // 무한 스크롤 페이지
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [eventData, setEventData] = useState<EventDataType[]>([]);

  const onEndReached = () => {
    const newPage = page + 1;
    setPage(newPage);

    const moreData = Array(6)
      .fill(null)
      .map((_, index) => ({
        ...eventData[0],
        eventID: newPage * 6 + index + 1,
      }));

    setEventData(prevData => [...prevData, ...moreData]);
  };

  const renderReviewItem = ({item}: {item: EventDataType}) => (
    <PhotoBoothEventFrame event={item} />
  );

  useEffect(() => {
    setTimeout(() => {
      const eventTmepData = Array(5)
        .fill(null)
        .map((_, index) => ({
          eventID: index + 1,
          representativeImage:
            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
          eventTitle: '화사의 ‘I Love My Body’ 프레임',
          startDate: '2023.09.07',
          endDate: '2023.10.31',
          photoboothName: '포토그레이',
          myEvent: true,
        }));

      setEventData(eventTmepData);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <MyEventListContainer>
      {!isLoading ? (
        <FlatList
          data={eventData}
          keyExtractor={item => item.eventID.toString()}
          renderItem={renderReviewItem}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.1}
          ListFooterComponent={SkeletonGetMoreMyPageEvent}
        />
      ) : (
        <SkeletonMyPageEvent />
      )}
    </MyEventListContainer>
  );
}
