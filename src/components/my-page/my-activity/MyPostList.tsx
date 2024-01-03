import { ReviewProps } from '../../../interfaces/Home.interface';
import { MyPostImageWrapper, MyPostListContainer } from '../../../styles/layout/my-page/MyActivity/MyPostList.style';

import MyPostFrame from './MyPostFrame';

export default function MyPostList() {
    const reviewData: ReviewProps[] = [
        {
            reviewID: 1,
            branchName: '포토부스 혜화점',
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
        {
            reviewID: 2,
            branchName: '포토부스 서울대점',
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
        {
            reviewID: 3,
            branchName: '포토그레이 홍대점',
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
        {
            reviewID: 4,
            branchName: '인생네컷 홍대점',
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
        {
            reviewID: 5,
            branchName: '포토부스 혜화점',
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
        },
    ];

    return (
        <MyPostListContainer>
            <MyPostImageWrapper>
                {reviewData.map(review => (
                    <MyPostFrame key={review.reviewID} data={review} />
                ))}
            </MyPostImageWrapper>
        </MyPostListContainer>
    );
}
