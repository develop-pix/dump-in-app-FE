import React from 'react';
import {EventResultProps} from '../../../interfaces/HomeSearch.interface';
import EventIcon from '../../../assets/image/reuse/event.png';
import {
  EventResultContainer,
  EventListIcon,
  EventListInfo,
} from '../../../styles/layout/home-search/search-result/EventResult.style';
import {useNavigation, useIsFocused, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';
import {
  FontWhiteGreyNormalMedium,
  FontWhiteNormalSemibold,
} from '../../../styles/layout/reuse/text/Text.style';
import {ScreenName} from '../../../interfaces/NavigationBar';

export default function EventResult({searchData, data}: EventResultProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const isFocused = useIsFocused();
  const route = useRoute();

  const onPressEvent = () => {
    const currentScreen = (route.params as {screen: ScreenName}).screen;
    if (isFocused) {
      navigation.push('EventDetail', {
        eventID: data.eventID,
        screen: currentScreen,
      });
    }
  };

  const index = data.eventName.indexOf(searchData);

  if (index === -1) {
    // 검색어가 이벤트 이름에 없는 경우도, 유사한 결과를 보여줄 수 있으므로 추가)
    return (
      <EventResultContainer onPress={onPressEvent}>
        <EventListInfo>
          <EventListIcon source={SearchResultIcon} />
          <FontWhiteGreyNormalThin numberOfLines={1} ellipsizeMode="tail">
            {data.eventName}
          </FontWhiteGreyNormalMedium>
        </EventListInfo>
      </EventResultContainer>
    );
  }

  // 검색어가 이벤트 이름에 있는 경우
  const beforeEventName = data.eventName.slice(0, index);
  const afterEventName = data.eventName.slice(index + searchData.length);

  return (
    <EventResultContainer onPress={onPressEvent}>
      <EventListInfo>
        <EventListIcon source={SearchResultIcon} />
        <FontWhiteGreyNormalThin numberOfLines={1} ellipsizeMode="tail">
          {beforeEventName}
          <FontWhiteNormalSemibold>{searchData}</FontWhiteNormalSemibold>
          {afterEventName}
        </FontWhiteGreyNormalMedium>
      </EventListInfo>
    </EventResultContainer>
  );
}
