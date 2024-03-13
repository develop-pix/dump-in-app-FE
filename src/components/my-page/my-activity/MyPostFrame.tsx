import { useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import LocationGreyIcon from 'assets/image/icon/list_location.svg';
import FavoriteButton from 'components/reuse/button/FavoriteButton';
import { LikeReview } from 'hooks/axios/Review';
import { storage } from 'hooks/mmkv/storage';
import { useAppSelector } from 'hooks/redux/store';
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

export default function MyPostFrame({ data }: ReviewFrameProps) {
    const navigation = useNavigation<MyPageStackScreenProps<'MyPage'>['navigation']>();
    const isFocused = useIsFocused();
    const accessToken = storage.getString('token.accessToken');
    const isLoggedIn = useAppSelector(state => state.userData).isLoggedIn;

    const [favorite, setFavorite] = useState<boolean>(true);

    /** 리뷰선택시 페이지 이동 */
    const onPressReview = () => {
        if (isFocused) {
            navigation.navigate('ReviewDetail', {
                reviewID: data.id,
            });
        }
    };

    /** 하트(좋아요) 버튼 클릭 */
    const onPressReviewLikeButton = async () => {
        if (accessToken && isLoggedIn) {
            const press_result = await LikeReview(accessToken, data.id);
            if (press_result.success) {
                setFavorite(prev => !prev);
            }
        }
    };

    return (
        <ReviewFrameContainer activeOpacity={0.9} onPress={onPressReview}>
            <ReviewFrameImage source={{ uri: data.mainThumbnailImageUrl }} />
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
                        {data.photoBoothName}
                    </FontWhiteGreySmallerMediumWithLineHeight>
                </ReviewNameContainer>
            </ReviewInfo>
        </ReviewFrameContainer>
    );
}
