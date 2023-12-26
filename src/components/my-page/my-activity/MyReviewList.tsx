import React from 'react';
import {ReviewProps} from '../../../interfaces/Home.interface';
import ReviewFrame from '../../home/photo-booth-list/ReviewFrame';
import {
  MyReviewListContainer,
  MyReviewImageWrapper,
} from '../../../styles/layout/my-page/MyActivity/MyReviewList.style';

export default function MyReviewList() {
  const reviewData: ReviewProps[] = [
    {
      reviewID: 1,
      branchName: '포토부스 혜화점',
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    },
    {
      reviewID: 2,
      branchName: '포토부스 서울대점',
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    },
    {
      reviewID: 3,
      branchName: '포토그레이 홍대점',
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    },
    {
      reviewID: 4,
      branchName: '인생네컷 홍대점',
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    },
    {
      reviewID: 5,
      branchName: '포토부스 혜화점',
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
    },
  ];

  return (
    <MyReviewListContainer>
      <MyReviewImageWrapper>
        {reviewData.map(review => (
          <ReviewFrame key={review.reviewID} data={review} />
        ))}
      </MyReviewImageWrapper>
    </MyReviewListContainer>
  );
}
