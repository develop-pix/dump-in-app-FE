import { useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import LocationGreyIcon from 'assets/image/icon/list_location.svg';
import FavoriteButton from 'components/reuse/button/FavoriteButton';
import { LikeReview } from 'hooks/axios/ReviewDetail';
import { ReviewFrameProps } from 'interfaces/Home.interface';
import { MyPageStackScreenProps } from 'interfaces/Navigation.interface';
import { colors } from 'styles/base/Variable';
import { FavoriteIcon } from 'styles/layout/category/CategoryEventItem.style';
import {
    LocationIconContainer,
    ReviewFrameContainer,
    ReviewFrameImage,
    ReviewInfo,
    ReviewNameContainer,
} from 'styles/layout/home/photo-booth-list/ReviewFrame.style';
import { FontWhiteGreySmallerMediumWithLineHeight } from 'styles/layout/reuse/text/Text.style';
import { useAppSelector } from 'hooks/redux/store';

export default function MyPostFrame({ data }: ReviewFrameProps) {
    const navigation = useNavigation<MyPageStackScreenProps<'MyPage'>['navigation']>();
    const isFocused = useIsFocused();
    const accessToken = useAppSelector(state => state.token).accessToken;

    const [favorite, setFavorite] = useState<boolean>(true);

    /** 리뷰선택시 페이지 이동 */
    const onPressReview = () => {
        if (isFocused) {
            navigation.navigate('ReviewDetail', {
                reviewID: data.reviewID,
            });
        }
    };

    /** 하트(좋아요) 버튼 클릭 */
    const onPressReviewLikeButton = async () => {
        if (accessToken) {
            const press_result = await LikeReview(accessToken, data.reviewID);
            if (press_result.success) {
                setFavorite(prev => !prev);
            }
        }
    };

    return (
        <ReviewFrameContainer activeOpacity={0.9} onPress={onPressReview}>
            <ReviewFrameImage source={{ uri: data.representativeImage }} />
            <LinearGradient
                colors={['transparent', colors.lightblack]}
                locations={[0.1, 1]}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -10,
                    height: 300,
                }}
            />

            <FavoriteIcon>
                <FavoriteButton favorite={favorite} onPress={onPressReviewLikeButton} />
            </FavoriteIcon>

            <ReviewInfo>
                <ReviewNameContainer>
                    <LocationIconContainer>
                        <LocationGreyIcon width={18} height={21} />
                    </LocationIconContainer>
                    <FontWhiteGreySmallerMediumWithLineHeight>
                        {data.branchName}
                    </FontWhiteGreySmallerMediumWithLineHeight>
                </ReviewNameContainer>
            </ReviewInfo>
        </ReviewFrameContainer>
    );
}
