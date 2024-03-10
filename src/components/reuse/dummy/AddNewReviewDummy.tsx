import { useNavigation } from '@react-navigation/native';

import AddIcon from 'assets/image/icon/btn_add.svg';
import { useAppSelector } from 'hooks/redux/store';
import { HomeStackScreenProps } from 'interfaces/Navigation.interface';
import {
    AddNewReviewContainer,
    AddNewReviewMessage,
    AddNewReviewTouchableOpacity,
} from 'styles/layout/reuse/dummy/AddNewReviewDummy.style';
import { FontWhiteGreyNormalMedium } from 'styles/layout/reuse/text/Text.style';

export default function AddNewReviewDummy() {
    const navigation = useNavigation<HomeStackScreenProps<'Home'>['navigation']>();
    const isLoggedIn = useAppSelector(state => state.userData).isLoggedIn;

    //FIXME: isLoggedIn가 true일시 AddReviewModal Open , false일시 LoginModal Open
    /** 로그인 여부에 따라 리뷰추가, 로그인 모달 Open */
    const onPressDummy = () => {
        isLoggedIn && navigation.navigate('AddReviewModal');
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
