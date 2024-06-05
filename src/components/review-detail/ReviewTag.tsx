import { useNavigation } from '@react-navigation/native';

import EtcImage from 'assets/image/icon/frame_etc.svg';
import { useAppSelector } from 'hooks/redux/store';
import {
    CategoryStackScreenProps,
    HomeStackScreenProps,
    LocationStackScreenProps,
    MyPageStackScreenProps,
} from 'interfaces/Navigation.interface';
import { FontYellowSmallerMediumWithLineSpacing } from 'styles/layout/reuse/text/Text.style';
import {
    ReviewDescBottom,
    ReviewFrameColor,
    ReviewFrameContainer,
    ReviewFrameGradient,
} from 'styles/layout/review-detail/ReviewDetail.style';
import { TagsArrayToHashTagArrayForm } from 'utils/FormChange';

export default function ReviewTag() {
    const navigation = useNavigation<
        | HomeStackScreenProps<'ReviewDetail'>['navigation']
        | LocationStackScreenProps<'ReviewDetail'>['navigation']
        | MyPageStackScreenProps<'ReviewDetail'>['navigation']
        | CategoryStackScreenProps<'ReviewDetail'>['navigation']
    >();

    const routes = navigation.getState().routes;
    const tabRouteName = routes[0].name;

    const { concept, frameColor, participants, cameraShot, curlAmount, goodsAmount } = useAppSelector(state => {
        switch (tabRouteName) {
            case 'Home':
                return state.homeReviewDetail;
            case 'Location':
                return state.branchReviewDetail;
            case 'MyPage':
                return state.myPageReviewDetail;
            case 'Category':
                return state.categoryReviewDetail;
            default:
                return state.homeReviewDetail;
        }
    });

    return (
        <ReviewDescBottom>
            <ReviewFrameContainer>
                <FontYellowSmallerMediumWithLineSpacing>#</FontYellowSmallerMediumWithLineSpacing>
                {frameColor === 'gradient' ? (
                    <ReviewFrameGradient>
                        <EtcImage width={16} height={16} />
                    </ReviewFrameGradient>
                ) : (
                    frameColor && <ReviewFrameColor colorOption={frameColor} />
                )}
            </ReviewFrameContainer>
            <FontYellowSmallerMediumWithLineSpacing># {participants}명</FontYellowSmallerMediumWithLineSpacing>
            <FontYellowSmallerMediumWithLineSpacing># {cameraShot}</FontYellowSmallerMediumWithLineSpacing>
            {TagsArrayToHashTagArrayForm(concept).map(tag => (
                <FontYellowSmallerMediumWithLineSpacing key={tag}>{tag}</FontYellowSmallerMediumWithLineSpacing>
            ))}
            {curlAmount === true && (
                <FontYellowSmallerMediumWithLineSpacing># 고데기 있음</FontYellowSmallerMediumWithLineSpacing>
            )}
            {goodsAmount === true && (
                <FontYellowSmallerMediumWithLineSpacing># 소품 많음</FontYellowSmallerMediumWithLineSpacing>
            )}
        </ReviewDescBottom>
    );
}
