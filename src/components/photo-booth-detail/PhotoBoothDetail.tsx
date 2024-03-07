import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
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
import { OfficialImagesContainer, PhotoDumpContainer } from 'styles/layout/photo-booth-detail/PhotoBoothDetail.style';
import { HeaderLeftContainer } from 'styles/layout/reuse/header/Header.style';

import PhotoBoothEvent from './PhotoBoothEvent';
import PhotoBoothImageTitle from './PhotoBoothImageTitle';

export default function PhotoBoothDetail() {
    const navigation = useNavigation<
        | HomeStackScreenProps<'PhotoBoothDetail'>['navigation']
        | CategoryStackScreenProps<'PhotoBoothDetail'>['navigation']
    >();
    const route = useRoute<CategoryStackScreenProps<'PhotoBoothDetail'>['route']>();
    const eventDataLimit = 8;
    const reviewDataLimit = 10;

    const [isLoading, setIsLoading] = useState<boolean>(true);
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

    useEffect(() => {
        const getPhotoBoothData = async () => {
            try {
                const detailPhotoBoothBrandData = await GetDetailPhotoBoothBrandData(route.params.photoBoothID);
                const photoBoothBrandEventData = await GetPhotoBoothEventList(
                    route.params.photoBoothID,
                    eventDataLimit,
                );
                const photoBoothBrandReviewData = await GetPhotoBoothReviewList(
                    route.params.photoBoothID,
                    reviewDataLimit,
                );
                if (detailPhotoBoothBrandData.data && photoBoothBrandEventData && photoBoothBrandReviewData) {
                    setPhotoBoothData(detailPhotoBoothBrandData.data);
                    setEventData(photoBoothBrandEventData.data);
                    setReviewData(photoBoothBrandReviewData.data);
                    setIsLoading(prev => !prev);
                }
            } catch (error) {
                console.log('GetPhotoBoothBrandsListError ' + error);
            }
        };

        getPhotoBoothData();
    }, [route.params.photoBoothID]);

    return (
        <>
            {!isLoading ? (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <PhotoBoothImageTitle photoBoothData={photoBoothData} />
                    <PhotoBoothEvent eventData={eventData} />
                    <OfficialImagesContainer>
                        <OfficialImages photoBoothName={photoBoothData.name} image={photoBoothData.image} />
                    </OfficialImagesContainer>
                    <PhotoDumpContainer>
                        <PhotoDump photoBoothName={photoBoothData.name} reviewData={reviewData} />
                    </PhotoDumpContainer>
                </ScrollView>
            ) : (
                <></>
            )}
        </>
    );
}
