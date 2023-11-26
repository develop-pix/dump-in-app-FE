import React, {useState} from 'react';
import {
  CategoryEventContainer,
  EventItem,
  EventImage,
  EventImageWrapper,
  FavoirteIcon,
  EventInfo,
  PhotoBoothNameContainer,
  LocationIcon,
  PhotoBoothName,
  EventTitle,
  EventTerm,
} from '../../styles/layout/category/CategoryEvent.style';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../interfaces/NavigationBar';
import FavoirteButton from '../reuse/button/FavoritetButton';
import {colors} from '../../styles/base/Variable';
import LocationImage from '../../assets/image/reuse/location_white.png';
import CategoryEventFilter from './CategoryEventFilter';
import SearchNoData from '../reuse/alert/SearchNoData';

export default function CategoryEvent() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const onPressEvent = (id: number) => {
    navigation.push('EventDetail', {eventID: id});
  };

  // 추후에 함수 형태로 관심 등록 기능 추가(이벤트 아이디, 로그인 id 값 서버로 보내서 저장)
  const [favorite, setFavorite] = useState<boolean>(false);

  // 필터 데이터
  const [hashtags, setHashtags] = useState<string[]>([]);

  // 필터 옵션 선택시 호출되는 함수
  const filterOptionSelect = () => {
    // 서버에서 필터 적용한 데이터 가져와야함
    // 임시로 빈 데이터로 초기화
    setEventData([]);
  };

  // 임시 이벤트 데이터
  const [eventData, setEventData] = useState(() =>
    Array(5)
      .fill(null)
      .map((_, index) => ({
        eventID: index + 1,
        'representative-image':
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        'event-title': '화사의 ‘I Love My Body’ 프레임',
        'start-date': '2023.09.07',
        'end-date': '2023.10.31',
        'photobooth-name': '포토그레이',
        'my-event': true,
      })),
  );

  return (
    <CategoryEventContainer>
      <CategoryEventFilter
        hashtags={hashtags}
        setHashtags={setHashtags}
        filterOptionSelect={filterOptionSelect}
      />

      {eventData.length > 0 ? (
        eventData.map(item => (
          <EventItem
            key={item.eventID}
            onPress={() => onPressEvent(item.eventID)}>
            <EventImageWrapper>
              <EventImage source={{uri: item['representative-image']}} />
              <LinearGradient
                colors={['transparent', colors.black]}
                locations={[0.1, 0.7]}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 130,
                }}
              />
              <FavoirteIcon>
                <FavoirteButton
                  favorite={item['my-event']}
                  setFavorite={setFavorite}
                />
              </FavoirteIcon>
              <EventInfo>
                <PhotoBoothNameContainer>
                  <LocationIcon source={LocationImage} />
                  <PhotoBoothName>{item['photobooth-name']}</PhotoBoothName>
                </PhotoBoothNameContainer>
                <EventTitle>{item['event-title']}</EventTitle>
                <EventTerm>
                  {item['start-date'] + ' ~ ' + item['end-date']}
                </EventTerm>
              </EventInfo>
            </EventImageWrapper>
          </EventItem>
        ))
      ) : (
        <SearchNoData
          alertText="아직 등록된 이벤트가 없습니다."
          recommendText="PUSH 알람을 허용하시면
        신규 이벤트 소식을 알려드려요."
        />
      )}
    </CategoryEventContainer>
  );
}
