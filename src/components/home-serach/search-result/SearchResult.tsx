import React, {useState, useRef} from 'react';
import {SearchResultProps} from '../../../interfaces/HomeSearch.interface';
import EventResult from './EventResult';
import {
  SearchResultContainer,
  EventTitleContainer,
  PhotoDumpUpScrollImageBox,
  PhotoDumpTitleContainer,
} from '../../../styles/layout/home-search/search-result/SearchResult.style';
import SearchNoData from '../../reuse/alert/SearchNoData';
import {SearchResultAlertContainer} from '../../../styles/layout/home-search/input/ReviewSearchInput.style';
import ReviewFrame from '../../home/photo-booth-list/ReviewFrame';
import MoreEventResult from './MoreEventResult';
import {ReviewProps} from '../../../interfaces/Home.interface';
import {TouchableOpacity, FlatList, Modal} from 'react-native';
import GetMoreReview from '../../reuse/photo-dump/GetMoreReview';
import {
  FontWhiteGreySmallerSemibold,
  FontWhiteGreyNormalMedium,
} from '../../../styles/layout/reuse/text/Text.style';
import UpIcon from '../../../assets/image/icon/btn_up.svg';

export default function SearchResult({
  searchData,
  eventData,
  photoDumpData,
}: SearchResultProps) {
  const [allPhotoBoothData, setAllPhotoBoothData] = useState(photoDumpData);

  // 이벤트 더보기 모달
  const [showMoreEventModal, setShowMoreEventModal] = useState(false);
  const closeMoreEventModal = () => {
    setShowMoreEventModal(false);
  };

  const {eventData: eventList, finishedEvent} = eventData;

  const flatListRef = useRef<FlatList>(null);
  const handleScrollToTop = () => {
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  };

  const onEndReached = () => {
    // 스크롤 시 새로운 임시 데이터
    const lastReviewID =
      allPhotoBoothData[allPhotoBoothData.length - 1].reviewID;
    const newReviewData: ReviewProps[] = [
      {
        reviewID: lastReviewID + 1,
        branchName: '포토부스 서울대점',
        representativeImage:
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      },
      {
        reviewID: lastReviewID + 2,
        branchName: '포토부스 홍대점',
        representativeImage:
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      },
      {
        reviewID: lastReviewID + 3,
        branchName: '포토그레이 서울대점',
        representativeImage:
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      },
      {
        reviewID: lastReviewID + 4,
        branchName: '인생네컷 홍대점',
        representativeImage:
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      },
    ];

    // 새로운 데이터를 기존 데이터에 추가
    setAllPhotoBoothData(prevData => [...prevData, ...newReviewData]);
  };

  const renderReviewItem = ({item}: {item: ReviewProps}) => (
    <ReviewFrame key={item.reviewID} data={item} />
  );

  return (
    <SearchResultContainer>
      {finishedEvent ? (
        <>
          <SearchResultAlertContainer>
            <SearchNoData
              alertText="종료된 이벤트입니다"
              recommendText="그래도 관련 리뷰는 찾아볼 수 있어요!"
            />
          </SearchResultAlertContainer>
          {photoDumpData.length > 0 && (
            <>
              <PhotoDumpTitleContainer>
                <FontWhiteGreySmallerSemibold>
                  PHOTO DUMP
                </FontWhiteGreySmallerSemibold>
              </PhotoDumpTitleContainer>
              <FlatList
                data={allPhotoBoothData}
                keyExtractor={item => item.reviewID.toString()}
                ref={flatListRef}
                renderItem={renderReviewItem}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.1}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-evenly'}}
                ListFooterComponent={<GetMoreReview />}
              />
            </>
          )}
        </>
      ) : (
        <>
          <EventTitleContainer>
            <FontWhiteGreySmallerSemibold>Event</FontWhiteGreySmallerSemibold>
            {eventList.length > 3 && (
              <TouchableOpacity onPress={() => setShowMoreEventModal(true)}>
                <FontWhiteGreyNormalMedium>더보기</FontWhiteGreyNormalMedium>
              </TouchableOpacity>
            )}
          </EventTitleContainer>
          {eventList.slice(0, 3).map(data => (
            <EventResult
              searchData={searchData}
              key={data.eventID}
              data={data}
            />
          ))}

          {photoDumpData.length > 0 && (
            <>
              <PhotoDumpTitleContainer>
                <FontWhiteGreySmallerSemibold>
                  PHOTO DUMP
                </FontWhiteGreySmallerSemibold>
              </PhotoDumpTitleContainer>
              <FlatList
                data={allPhotoBoothData}
                keyExtractor={item => item.reviewID.toString()}
                ref={flatListRef}
                renderItem={renderReviewItem}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.1}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-evenly'}}
                ListFooterComponent={<GetMoreReview />}
              />
            </>
          )}
        </>
      )}

      {allPhotoBoothData.length >= 6 && (
        <PhotoDumpUpScrollImageBox onPress={handleScrollToTop}>
          <UpIcon />
        </PhotoDumpUpScrollImageBox>
      )}

      <Modal
        animationType="slide"
        transparent={false}
        visible={showMoreEventModal}
        onRequestClose={closeMoreEventModal}>
        <MoreEventResult
          eventData={eventList}
          searchData={searchData}
          closeMoreEventModal={closeMoreEventModal}
        />
      </Modal>
    </SearchResultContainer>
  );
}
