import { HomeSelectedFilterOptionProps } from '../../interfaces/Home.interface';
import { NoResultPhotoBoothContainer } from '../../styles/layout/home/NoResultPhotoBooth.style';
import SearchNoData from '../reuse/alert/SearchNoData';
import { NormalButton } from '../reuse/button/NormalButton';

// TODO: 결과 없는 화면은 따로 컴포넌트화 시켜는 방식으로 수정 예정
export default function NoResultPhotoBooth({ filterData }: HomeSelectedFilterOptionProps) {
    const onPressButton = () => {
        // filterData 데이터 넘겨주고 리뷰 등록 페이지 구현 후 이동하도록 추가
    };

    return (
        <NoResultPhotoBoothContainer>
            <SearchNoData alertText="필터 결과가 없습니다." recommendText="이 조건으로 내 사진을 등록해 보세요." />
            <NormalButton text="내 사진 등록하기" onPress={onPressButton} />
        </NoResultPhotoBoothContainer>
    );
}
