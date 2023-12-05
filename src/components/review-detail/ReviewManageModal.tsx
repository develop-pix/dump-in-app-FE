import React from 'react';
import Modal from 'react-native-modal';
import {
  HorizonLine,
  ReviewManageModalContainer,
  ReviewManageModalWrapper,
  ReviewManageTouchableOpacity,
} from '../../styles/layout/review-detail/ReviewManageModal.style';
import {ReviewManageModalProps} from '../../interfaces/ReviewDetail.interface';
import {Platform} from 'react-native';
import {FontWhiteNormalThick} from '../../styles/layout/reuse/text/Text.style';
export default function ReviewManageModal({
  setOpenModal,
}: ReviewManageModalProps) {
  const platform = Platform.OS;

  const onPressReviewEdit = () => {
    setOpenModal(false);
    //추후 ReviewEdit 페이지 추가후 이동
  };

  const onPressReviewDelete = () => {
    setOpenModal(false);
    //추후 ReviewDelete 페이지 추가후 이동
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
      }}>
      <ReviewManageModalContainer platform={platform}>
        <ReviewManageModalWrapper>
          <ReviewManageTouchableOpacity onPress={onPressReviewEdit}>
            <FontWhiteNormalThick>리뷰 수정하기</FontWhiteNormalThick>
          </ReviewManageTouchableOpacity>
          <HorizonLine />
          <ReviewManageTouchableOpacity onPress={onPressReviewDelete}>
            <FontWhiteNormalThick>삭제하기</FontWhiteNormalThick>
          </ReviewManageTouchableOpacity>
        </ReviewManageModalWrapper>
      </ReviewManageModalContainer>
    </Modal>
  );
}
