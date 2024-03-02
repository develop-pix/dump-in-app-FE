import { useNavigation } from '@react-navigation/native';

import AddIcon from 'assets/image/icon/btn_add.svg';
import { useAppSelector } from 'hooks/redux/store';
import { HomeStackScreenProps } from 'interfaces/Navigation.interface';
import {
    AddNewReviewContainer,
    AddNewReviewMessage,
    AddNewReviewTouchableOpacity,
} from 'styles/layout/reuse/dummy/AddNewReview.style';
import { FontWhiteGreyNormalMedium } from 'styles/layout/reuse/text/Text.style';

export default function AddNewReviewDummy() {
    const navigation = useNavigation<HomeStackScreenProps<'Home'>['navigation']>();
    const accessToken = useAppSelector(state => state.token).accessToken;

    const onPressDummy = () => {
        accessToken && navigation.navigate('AddReviewModal', { branchID: undefined });
    };
    return (
        <AddNewReviewContainer>
            <AddNewReviewTouchableOpacity onPress={onPressDummy}>
                <AddIcon />
                <AddNewReviewMessage>
                    <FontWhiteGreyNormalMedium>내 사진을</FontWhiteGreyNormalMedium>
                    <FontWhiteGreyNormalMedium>등록해 보세요!</FontWhiteGreyNormalMedium>
                </AddNewReviewMessage>
            </AddNewReviewTouchableOpacity>
        </AddNewReviewContainer>
    );
}
