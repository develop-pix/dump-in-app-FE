import { useNavigation } from '@react-navigation/native';

import NextIcon from 'assets/image/icon/btn_next_grey.svg';
import { HomeStackScreenProps } from 'interfaces/Navigation.interface';
import {
    SeeMoreEventContainer,
    SeeMoreEventMessage,
    SeeMoreEventRecommendMessage,
    SeeMoreEventTouchableOpacity,
} from 'styles/layout/reuse/dummy/SeeMoreEventDummy.style';
import { FontLightGreySmallerMedium, FontWhiteGreyNormalMedium } from 'styles/layout/reuse/text/Text.style';

export default function SeeMoreEventDummy() {
    const navigation = useNavigation<HomeStackScreenProps<'Home'>['navigation']>();

    //FIXME: 클릭시 01_Home/Alarm 으로 이동 하도록 수정
    /** 01_Home/Alarm 으로 이동 */
    const onPressDummy = () => {
        navigation.navigate('AddReviewModal', { branchID: undefined });
    };

    return (
        <SeeMoreEventContainer>
            <SeeMoreEventTouchableOpacity onPress={onPressDummy}>
                <SeeMoreEventRecommendMessage>
                    <FontWhiteGreyNormalMedium>더 많은 신규 이벤트</FontWhiteGreyNormalMedium>
                    <FontWhiteGreyNormalMedium>소식을 들려줄게요.</FontWhiteGreyNormalMedium>
                </SeeMoreEventRecommendMessage>
                <SeeMoreEventMessage>
                    <FontLightGreySmallerMedium>알림 설정하기</FontLightGreySmallerMedium>
                    <NextIcon width={20} height={20} />
                </SeeMoreEventMessage>
            </SeeMoreEventTouchableOpacity>
        </SeeMoreEventContainer>
    );
}
