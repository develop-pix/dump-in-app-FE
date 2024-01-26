import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import GoBackButton from 'components/reuse/button/GoBackButton';
import OfficialImages from 'components/reuse/official-images/OfficialImages';
import PhotoDump from 'components/reuse/photo-dump/PhotoDump';
import {
    CategoryStackScreenProps,
    HomeStackScreenProps,
    MyPageStackScreenProps,
} from 'interfaces/Navigation.interface';
import { PhotoBoothDataType } from 'interfaces/PhotoBoothDetail.interface';
import { OfficialImagesContainer, PhotoDumpContainer } from 'styles/layout/photo-booth-detail/PhotoBoothDetail.style';
import { HeaderLeftContainer } from 'styles/layout/reuse/header/Header.style';

import PhotoBoothEvent from './PhotoBoothEvent';
import PhotoBoothImageTitle from './PhotoBoothImageTitle';

export default function PhotoBoothDetail() {
    const navigation = useNavigation<
        | HomeStackScreenProps<'PhotoBoothDetail'>['navigation']
        | CategoryStackScreenProps<'PhotoBoothDetail'>['navigation']
        | MyPageStackScreenProps<'PhotoBoothDetail'>['navigation']
    >();

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [photoBoothData, setPhotoBoothData] = useState<PhotoBoothDataType>({
        photoBoothName: '',
        hashtag: [],
        representativeImage: '',
        officialImage: [],
        event: [],
        review: [],
    });

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
        setTimeout(() => {
            // 선언된 데이터를 사용하여 상태를 설정합니다.
            setPhotoBoothData({
                photoBoothName: '포토그레이',
                hashtag: ['레드프레임', '컨셉사진', '레드'],
                representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                officialImage: [
                    'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                ],
                event: [
                    {
                        eventID: 1,
                        representativeImage:
                            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                        eventTitle: '화사의 ‘I Love My Body’ 프레임',
                        startDate: '2023-09-07',
                        endDate: '2023-10-31',
                        myEvent: true,
                    },
                    {
                        eventID: 2,
                        representativeImage:
                            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                        eventTitle: '화사의 ‘I Love My Body’ 프레임',
                        startDate: '2023-09-07',
                        endDate: '2023-10-31',
                        myEvent: false,
                    },
                    {
                        eventID: 3,
                        representativeImage:
                            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                        eventTitle: '화사의 ‘I Love My Body’ 프레임',
                        startDate: '2023-09-07',
                        endDate: '2023-10-31',
                        myEvent: true,
                    },
                    {
                        eventID: 4,
                        representativeImage:
                            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                        eventTitle: '화사의 ‘I Love My Body’ 프레임',
                        startDate: '2023-09-07',
                        endDate: '2023-10-31',
                        myEvent: false,
                    },
                ],
                review: [
                    {
                        reviewID: 1,
                        representativeImage:
                            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                        description: '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
                        hashtag: ['3', '무릎', '생일', '고데기 있음', '소품 많음'],
                    },
                    {
                        reviewID: 2,
                        representativeImage:
                            'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                        description: '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
                        hashtag: ['3', '무릎', '생일', '고데기 있음', '소품 많음'],
                    },
                ],
            });
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {!isLoading ? (
                <ScrollView>
                    <PhotoBoothImageTitle photoBoothData={photoBoothData} />
                    <PhotoBoothEvent eventData={photoBoothData.event} />
                    <OfficialImagesContainer>
                        {/* FIXME: 임시 데이터 타입 오류 */}
                        {/* <OfficialImages
                            image={photoBoothData.officialImage}
                            photoBoothName={photoBoothData.photoBoothName}
                        /> */}
                    </OfficialImagesContainer>
                    <PhotoDumpContainer>
                        {/* <PhotoDump photoBoothName={photoBoothData.photoBoothName} reviewData={photoBoothData.review} /> */}
                    </PhotoDumpContainer>
                </ScrollView>
            ) : (
                <></>
            )}
        </>
    );
}
