import { useNavigation } from '@react-navigation/native';

import NextIcon from 'assets/image/icon/btn_next_grey.svg';
import { HomeStackScreenProps } from 'interfaces/Navigation.interface';
import {
    SeeNearPhotoBoothContainer,
    SeeNearPhotoBoothMessage,
    SeeNearPhotoBoothRecommendMessage,
    SeeNearPhotoBoothTouchableOpacity,
} from 'styles/layout/reuse/dummy/SeeNearPhotoBoothDummy.style';
import { FontLightGreySmallerMedium, FontWhiteGreyNormalMedium } from 'styles/layout/reuse/text/Text.style';

//TODO: 01_Home 내 주변 포토부스를 찾아볼까요?
export default function SeeNearPhotoBoothDummy() {
    const navigation = useNavigation<HomeStackScreenProps<'Home'>['navigation']>();

    //FIXME: 클릭시 02_Location 페이지로 이동하도록 수정
    /** 02_Location 페이지로 이동 */
    const onPressDummy = () => {
        navigation.navigate('AddReviewModal', { branchID: undefined });
    };

    return (
        <SeeNearPhotoBoothContainer>
            <SeeNearPhotoBoothTouchableOpacity onPress={onPressDummy}>
                <SeeNearPhotoBoothRecommendMessage>
                    <FontWhiteGreyNormalMedium>내 주변 포토부스를</FontWhiteGreyNormalMedium>
                    <FontWhiteGreyNormalMedium>찾아볼까요?</FontWhiteGreyNormalMedium>
                </SeeNearPhotoBoothRecommendMessage>
                <SeeNearPhotoBoothMessage>
                    <FontLightGreySmallerMedium>지도에서 보기</FontLightGreySmallerMedium>
                    <NextIcon width={20} height={20} />
                </SeeNearPhotoBoothMessage>
            </SeeNearPhotoBoothTouchableOpacity>
        </SeeNearPhotoBoothContainer>
    );
}
