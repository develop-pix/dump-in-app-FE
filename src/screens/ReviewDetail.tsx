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
    RowContainer,
} from 'styles/layout/reuse/header/Header.style';
import { ReviewDetailContainer } from 'styles/layout/review-detail/ReviewDetail.style';

export default function ReviewDetail() {
    const navigation = useNavigation<
        | HomeStackScreenProps<'ReviewDetail'>['navigation']
        | LocationStackScreenProps<'ReviewDetail'>['navigation']
        | MyPageStackScreenProps<'ReviewDetail'>['navigation']
        | CategoryStackScreenProps<'PhotoBoothDetail'>['navigation']
    >();
    const route = useRoute<
        | HomeStackScreenProps<'ReviewDetail'>['route']
        | LocationStackScreenProps<'ReviewDetail'>['route']
        | MyPageStackScreenProps<'ReviewDetail'>['route']
        | CategoryStackScreenProps<'ReviewDetail'>['route']
    >();

    const [openModal, setOpenModal] = useState<boolean>(false);
    const { isMine } = useAppSelector(state => state.branchReviewDetail);

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
                    <RowContainer>
                        <LocationIcon width={20} height={24} style={{ marginRight: 4 }} />
                        {/* <FontWhiteNormalMedium>{reviewData.photoBoothId}</FontWhiteNormalMedium> */}
                    </RowContainer>
                );
            },
        });
    }, [isMine, navigation]);

    return (
        <ReviewDetailContainer>
            <ReviewDetailForm />
            <ReviewManageModal openModal={openModal} setOpenModal={setOpenModal} reviewID={route.params.reviewID} />
        </ReviewDetailContainer>
    );
}
