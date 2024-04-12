import { useIsFocused, useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

import { DeleteReview } from 'hooks/axios/Review';
import { ReviewManageModalProps } from 'interfaces/ReviewDetail.interface';
import { FontWhiteNormalSemibold } from 'styles/layout/reuse/text/Text.style';
import {
    HorizonLine,
    ReviewManageModalContainer,
    ReviewManageModalWrapper,
    ReviewManageTouchableOpacity,
} from 'styles/layout/review-detail/ReviewManageModal.style';

export default function ReviewManageModal({ openModal, setOpenModal, reviewID }: ReviewManageModalProps) {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const onPressReviewEdit = () => {
        setOpenModal(false);

        if (isFocused) {
            navigation.navigate('ReviewEdit', {
                reviewID,
            });
        }
    };

    const onPressReviewDelete = async () => {
        try {
            const result = await DeleteReview(reviewID);
            if (result.data) {
                setOpenModal(false);
                navigation.goBack();
            }
        } catch (error) {
            console.log('DeleteReviewError ' + error);
        }
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
            backdropOpacity={0.5}
            coverScreen={false}
            useNativeDriver={true}
            onBackdropPress={() => {
                setOpenModal(false);
            }}
            onBackButtonPress={() => {
                setOpenModal(false);
            }}>
            <ReviewManageModalContainer>
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
