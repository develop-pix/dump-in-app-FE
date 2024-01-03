import { Platform } from 'react-native';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Modal from 'react-native-modal';

import { RootStackParam, ScreenName } from '../../interfaces/NavigationBar';
import { ReviewManageModalProps } from '../../interfaces/ReviewDetail.interface';
import { FontWhiteNormalSemibold } from '../../styles/layout/reuse/text/Text.style';
import {
    HorizonLine,
    ReviewManageModalContainer,
    ReviewManageModalWrapper,
    ReviewManageTouchableOpacity,
} from '../../styles/layout/review-detail/ReviewManageModal.style';
export default function ReviewManageModal({ setOpenModal, reviewID }: ReviewManageModalProps) {
    const platform = Platform.OS;
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const isFocused = useIsFocused();
    const route = useRoute();

    const onPressReviewEdit = () => {
        setOpenModal(false);
        const currentScreen = (route.params as { screen: ScreenName }).screen;
        if (isFocused) {
            navigation.push('ReviewEdit', {
                ReviewID: reviewID,
                screen: currentScreen,
            });
        }
        // TODO: 추후 ReviewEdit 페이지 추가후 이동
    };

    const onPressReviewDelete = () => {
        setOpenModal(false);
        // TODO: 추후 ReviewDelete 페이지 추가후 이동
    };

    return (
        <Modal
            style={{
                margin: 0,
                justifyContent: 'flex-end',
            }}
            isVisible={true}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.7}
            coverScreen={false}
            onBackdropPress={() => {
                setOpenModal(false);
            }}
            onBackButtonPress={() => {
                setOpenModal(false);
            }}>
            <ReviewManageModalContainer platform={platform}>
                <ReviewManageModalWrapper>
                    <ReviewManageTouchableOpacity onPress={onPressReviewEdit}>
                        <FontWhiteNormalSemibold>리뷰 수정하기</FontWhiteNormalSemibold>
                    </ReviewManageTouchableOpacity>
                    <HorizonLine />
                    <ReviewManageTouchableOpacity onPress={onPressReviewDelete}>
                        <FontWhiteNormalSemibold>삭제하기</FontWhiteNormalSemibold>
                    </ReviewManageTouchableOpacity>
                </ReviewManageModalWrapper>
            </ReviewManageModalContainer>
        </Modal>
    );
}
