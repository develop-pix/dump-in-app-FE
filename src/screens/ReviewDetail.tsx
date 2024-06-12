import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import SeeMoreIcon from 'assets/image/icon/btn_more.svg';
import LocationIcon from 'assets/image/icon/location_white.svg';
import GoBackButton from 'components/reuse/button/GoBackButton';
import ReviewDetailForm from 'components/review-detail/ReviewDetailForm';
import ReviewManageModal from 'components/review-detail/ReviewManageModal';
import { useAppSelector } from 'hooks/redux/store';
import {
    CategoryStackScreenProps,
    HomeStackScreenProps,
    LocationStackScreenProps,
    MyPageStackScreenProps,
} from 'interfaces/Navigation.interface';
import {
    HeaderIconContainer,
    HeaderLeftContainer,
    HeaderRightContainer,
    HeaderRowContainer,
} from 'styles/layout/reuse/header/Header.style';
import { FontWhiteNormalMedium } from 'styles/layout/reuse/text/Text.style';
import { ReviewDetailContainer } from 'styles/layout/review-detail/ReviewDetail.style';

export default function ReviewDetail() {
    const route = useRoute<
        | HomeStackScreenProps<'ReviewDetail'>['route']
        | LocationStackScreenProps<'ReviewDetail'>['route']
        | MyPageStackScreenProps<'ReviewDetail'>['route']
        | CategoryStackScreenProps<'ReviewDetail'>['route']
    >();
    const navigation = useNavigation<
        | HomeStackScreenProps<'ReviewDetail'>['navigation']
        | LocationStackScreenProps<'ReviewDetail'>['navigation']
        | MyPageStackScreenProps<'ReviewDetail'>['navigation']
        | CategoryStackScreenProps<'ReviewDetail'>['navigation']
    >();
    const routes = navigation.getState().routes;
    const tabRouteName = routes[0].name;

    const [openModal, setOpenModal] = useState(false);
    const { isMine, photoBoothName } = useAppSelector(state => {
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

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <HeaderLeftContainer>
                        <GoBackButton />
                    </HeaderLeftContainer>
                );
            },
            headerRight: () => {
                return (
                    isMine && (
                        <HeaderRightContainer>
                            <HeaderIconContainer onPress={() => setOpenModal(true)}>
                                <SeeMoreIcon width={4} height={16} />
                            </HeaderIconContainer>
                        </HeaderRightContainer>
                    )
                );
            },
            headerTitle: () => {
                return (
                    <HeaderRowContainer>
                        <LocationIcon width={20} height={24} style={{ marginRight: 4, marginBottom: 1 }} />
                        <FontWhiteNormalMedium>{photoBoothName}</FontWhiteNormalMedium>
                    </HeaderRowContainer>
                );
            },
        });
    }, [isMine, navigation, photoBoothName]);

    return (
        <ReviewDetailContainer>
            <ReviewDetailForm />
            <ReviewManageModal openModal={openModal} setOpenModal={setOpenModal} reviewID={route.params.reviewID} />
        </ReviewDetailContainer>
    );
}
