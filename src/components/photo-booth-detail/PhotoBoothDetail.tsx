import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import GoBackButton from 'components/reuse/button/GoBackButton';
import OfficialImages from 'components/reuse/official-images/OfficialImages';
import PhotoDump from 'components/reuse/photo-dump/PhotoDump';
import {
    GetDetailPhotoBoothBrandData,
    GetPhotoBoothEventList,
    GetPhotoBoothReviewList,
} from 'hooks/axios/PhotoBoothBrand';
import { CategoryStackScreenProps, HomeStackScreenProps } from 'interfaces/Navigation.interface';
import { EventDataType, PhotoBoothDataType } from 'interfaces/PhotoBoothDetail.interface';
import { ReviewData } from 'interfaces/reuse/photo-dump/Review.interface';
import {
    OfficialImagesContainer,
    PhotoBoothDetailScrollView,
    PhotoBoothDetailWrapper,
    PhotoDumpContainer,
} from 'styles/layout/photo-booth-detail/PhotoBoothDetail.style';
import { HeaderLeftContainer } from 'styles/layout/reuse/header/Header.style';

import PhotoBoothEvent from './PhotoBoothEvent';
import PhotoBoothImageTitle from './PhotoBoothImageTitle';

export default function PhotoBoothDetail() {
    const navigation = useNavigation<
        | HomeStackScreenProps<'PhotoBoothDetail'>['navigation']
        | CategoryStackScreenProps<'PhotoBoothDetail'>['navigation']
    >();
    const route = useRoute<CategoryStackScreenProps<'PhotoBoothDetail'>['route']>();
    const eventDataLimit = 6;
    const reviewDataLimit = 10;

    const [page, setPage] = useState(0);
    const [photoBoothData, setPhotoBoothData] = useState<PhotoBoothDataType>({
        id: undefined,
        name: '',
        hashtag: [],
        image: [],
        mainThumbnailImageUrl: '',
    });
    const [eventData, setEventData] = useState<EventDataType[]>([]);
    const [reviewData, setReviewData] = useState<ReviewData[]>([]);

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <HeaderLeftContainer>
                        <GoBackButton />
                    </HeaderLeftContainer>
                );
            },
        });
    }, [navigation]);

    // 포토부스 상세 페이지 진입시 해당 포토부스의 데이터, 이벤트, 리뷰 Get
    useEffect(() => {
        const getPhotoBoothData = async () => {
            try {
                const detailPhotoBoothBrandData = await GetDetailPhotoBoothBrandData(route.params.photoBoothID);
                const photoBoothBrandEventData = await GetPhotoBoothEventList(
                    eventDataLimit,
                    page,
                    route.params.photoBoothID,
                );
                const photoBoothBrandReviewData = await GetPhotoBoothReviewList(
                    route.params.photoBoothID,
                    reviewDataLimit,
                );

                if (detailPhotoBoothBrandData.data && photoBoothBrandEventData.data && photoBoothBrandReviewData) {
                    setPhotoBoothData(detailPhotoBoothBrandData.data);
                    setEventData(photoBoothBrandEventData.data.results);
                    setReviewData(photoBoothBrandReviewData.data);
                }
            } catch (error) {
                console.log('GetPhotoBoothBrandsListError ' + error);
            }
        };

        getPhotoBoothData();
    }, [page, route.params.photoBoothID]);

    return (
        <PhotoBoothDetailScrollView showsVerticalScrollIndicator={false}>
            <PhotoBoothDetailWrapper>
                <PhotoBoothImageTitle photoBoothData={photoBoothData} />
                <PhotoBoothEvent dataLimit={eventDataLimit} page={page} setPage={setPage} eventData={eventData} />
                <OfficialImagesContainer>
                    <OfficialImages photoBoothName={photoBoothData.name} image={photoBoothData.image} />
                </OfficialImagesContainer>
                <PhotoDumpContainer>
                    <PhotoDump photoBoothName={photoBoothData.name} reviewData={reviewData} />
                </PhotoDumpContainer>
            </PhotoBoothDetailWrapper>
        </PhotoBoothDetailScrollView>
    );
}
