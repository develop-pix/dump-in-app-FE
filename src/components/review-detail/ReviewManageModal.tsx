import { Platform } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

import { ReviewManageModalProps } from 'interfaces/ReviewDetail.interface';
import { FontWhiteNormalSemibold } from 'styles/layout/reuse/text/Text.style';
import {
    HorizonLine,
    ReviewManageModalContainer,
    ReviewManageModalWrapper,
    ReviewManageTouchableOpacity,
} from 'styles/layout/review-detail/ReviewManageModal.style';

// FIXME: 스타일 재구성 필요
export default function ReviewManageModal({ openModal, setOpenModal, reviewID }: ReviewManageModalProps) {
    const platform = Platform.OS;
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const onPressReviewEdit = () => {
        setOpenModal(false);

        if (isFocused) {
            navigation.navigate('ReviewEdit', {
                reviewID,
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
            isVisible={openModal}
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
