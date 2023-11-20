import React from 'react';

import {NoResultPhotoBoothContainer} from '../../styles/layout/home/NoResultPhotoBooth.style';
import {ReviewRegistrationButton} from '../reuse/button/ReviewRegistrationButton';
import {HomeSelectedFilterOptionProps} from '../../interfaces/Home.interface';
import SearchNoData from '../reuse/alert/SearchNoData';

// 결과 없는 화면은 따로 컴포넌트화 시켜는 방식으로 수정 예정
export default function NoResultPhotoBooth({
  filterData,
}: HomeSelectedFilterOptionProps) {
  const onPressButton = () => {
    // filterData 데이터도 넘겨주고 리뷰 등록 페이지로 이동하도록 추가, 디자인 나오면 수정
  };

  return (
    <NoResultPhotoBoothContainer>
      <SearchNoData
        alertText="필터 결과가 없습니다."
        recommendText="이 조건으로 내 사진을 등록해 보세요."
      />
      <ReviewRegistrationButton onPress={onPressButton} />
    </NoResultPhotoBoothContainer>
  );
}
