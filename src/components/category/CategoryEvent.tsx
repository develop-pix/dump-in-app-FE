import React, {useState, useEffect, useRef} from 'react';
import {
  CategoryEventContainer,
  CategoryEventUpScrollImageBox,
} from '../../styles/layout/category/CategoryEvent.style';
import CategoryEventFilter from './CategoryEventFilter';
import SearchNoData from '../reuse/alert/SearchNoData';
import CategoryEventItem from './CategoryEventItem';
import SkeletonCategoryEvent from '../reuse/skeleton/SkeletonCategoryEvent';
import SkeletonGetMoreCategoryEventData from '../reuse/skeleton/SkeletonGetMoreCategoryEventData';
import {FlatList} from 'react-native';
import {CategoryEventProps} from '../../interfaces/Category.interface';
import UpIcon from '../../assets/image/icon/btn_up.svg';

export default function CategoryEvent() {
  // 무한 스크롤 페이지
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // 필터 데이터
  const [hashtags, setHashtags] = useState<string[]>([]);

  // 필터 옵션 선택시 호출되는 함수
  const filterOptionSelect = () => {
    // 서버에서 필터 적용한 데이터 가져와야함
    // 임시로 빈 데이터로 초기화
    setEventTempData([]);

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const flatListRef = useRef<FlatList>(null);
  const handleScrollToTop = () => {
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  };

  // 임시 이벤트 데이터
  const [eventTempData, setEventTempData] = useState(() =>
    Array(5)
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
      })),
  );

  const onEndReached = () => {
    const newPage = page + 1;
    setPage(newPage);

    const moreData = Array(5)
      .fill(null)
      .map((_, index) => ({
        ...eventTempData[0],
        eventID: newPage * 5 + index + 1,
      }));

    setEventTempData(prevData => [...prevData, ...moreData]);
  };

  const renderEventItem = ({item}: {item: CategoryEventProps}) => (
    <CategoryEventItem eventData={item} />
  );

  useEffect(() => {
    // 예시 async ~await로 정상적으로 데이터 fetch완료시 실행
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <CategoryEventContainer>
      <CategoryEventFilter
        hashtags={hashtags}
        setHashtags={setHashtags}
        filterOptionSelect={filterOptionSelect}
      />

      {!isLoading ? (
        <>
          {eventTempData.length > 0 ? (
            <>
              <FlatList
                data={eventTempData}
                keyExtractor={item => item.eventID.toString()}
                ref={flatListRef}
                renderItem={renderEventItem}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.1}
                ListFooterComponent={SkeletonGetMoreCategoryEventData}
              />
              <CategoryEventUpScrollImageBox onPress={handleScrollToTop}>
                <UpIcon />
              </CategoryEventUpScrollImageBox>
            </>
          ) : (
            <SearchNoData
              alertText="아직 등록된 이벤트가 없습니다."
              recommendText="PUSH 알람을 허용하시면
            신규 이벤트 소식을 알려드려요."
            />
          )}
        </>
      ) : (
        <SkeletonCategoryEvent />
      )}
    </CategoryEventContainer>
  );
}
