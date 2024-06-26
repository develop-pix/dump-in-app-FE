import { useIsFocused, useNavigation } from '@react-navigation/native';

import EventListIcon from 'assets/image/icon/result_event.svg';
import { EventResultProps } from 'interfaces/HomeSearch.interface';
import { RootStackScreenProps } from 'interfaces/Navigation.interface';
import {
    EventListIconContainer,
    EventListInfo,
    EventResultContainer,
} from 'styles/layout/home-search/search-result/EventResult.style';
import { FontWhiteGreyNormalMedium, FontWhiteNormalSemibold } from 'styles/layout/reuse/text/Text.style';

export default function EventResult({ searchData, data }: EventResultProps) {
    const navigation = useNavigation<RootStackScreenProps<'HomeSearch'>['navigation']>();
    const isFocused = useIsFocused();

    const onPressEvent = () => {
        if (isFocused) {
            navigation.navigate('MainTab', {
                screen: 'HomeTab',
                params: { screen: 'EventDetail', params: { eventID: data.eventID } },
            });
        }
    };

    const index = data.eventName.indexOf(searchData);

    if (index === -1) {
        // 검색어가 이벤트 이름에 없는 경우도, 유사한 결과를 보여줄 수 있으므로 추가)
        return (
            <EventResultContainer onPress={onPressEvent}>
                <EventListInfo>
                    <EventListIconContainer>
                        <EventListIcon width={24} height={24} />
                    </EventListIconContainer>
                    <FontWhiteGreyNormalMedium numberOfLines={1} ellipsizeMode="tail">
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
                <EventListIconContainer>
                    <EventListIcon width={24} height={24} />
                </EventListIconContainer>
                <FontWhiteGreyNormalMedium numberOfLines={1} ellipsizeMode="tail">
                    {beforeEventName}
                    <FontWhiteNormalSemibold>{searchData}</FontWhiteNormalSemibold>
                    {afterEventName}
                </FontWhiteGreyNormalMedium>
            </EventListInfo>
        </EventResultContainer>
    );
}
