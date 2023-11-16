import React from 'react';
import NoResultIcon from '../../assets/image/reuse/ic_alert.png';
import {
  NoResultPhotoBoothContainer,
  AlertIcon,
  NoResultText,
  NoResultSubText,
} from '../../styles/layout/home/NoResultPhotoBooth.style';
import {MarginTop} from '../../styles/layout/reuse/Margin.style';
import {ReviewRegistrationButton} from '../reuse/button/ReviewRegistrationButton';
import {HomeSelectedFilterOptionProps} from '../../interfaces/Home.interface';

export default function NoResultPhotoBooth({
  filterData,
}: HomeSelectedFilterOptionProps) {
  const onPressButton = () => {
    // 리뷰 등록 페이지로 이동하도록 추가, filterData 데이터도 넘겨줌
  };

  return (
    <NoResultPhotoBoothContainer>
      <MarginTop />

      <AlertIcon source={NoResultIcon} />
      <NoResultText>필터 결과가 없습니다.</NoResultText>
      <NoResultSubText>이 조건으로 내 사진을 등록해 보세요</NoResultSubText>

      <MarginTop />
      <MarginTop />

      <ReviewRegistrationButton onPress={onPressButton} />
    </NoResultPhotoBoothContainer>
  );
}
