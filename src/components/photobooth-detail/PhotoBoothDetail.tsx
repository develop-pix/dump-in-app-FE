import { useState } from 'react';
import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { PhotoBoothDetailRouteProp } from '../../interfaces/PhotoBoothDetail.interface';
import {
    OfficialImagesContainer,
    PhotoDumpContainer,
} from '../../styles/layout/photobooth-detail/PhotoBoothDetail.style';
import OfficialImages from '../reuse/official-images/OfficialImages';
import PhotoDump from '../reuse/photo-dump/PhotoDump';

import PhotoBoothEvent from './PhotoBoothEvent';
import PhotoBoothImageTitle from './PhotoBoothImageTitle';

export default function PhotoBoothDetail() {
    const route = useRoute<PhotoBoothDetailRouteProp>();
    const { PhotoBoothID } = route.params;

    // 임시 데이터, 포토부스 아이디 값의 데이터를 서버에서 가져옴
    const [photoboothData, setPhotoboothData] = useState({
        photoboothName: '포토그레이',
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
                representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                eventTitle: '화사의 ‘I Love My Body’ 프레임',
                startDate: '2023-09-07',
                endDate: '2023-10-31',
                myEvent: true,
            },
            {
                eventID: 2,
                representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                eventTitle: '화사의 ‘I Love My Body’ 프레임',
                startDate: '2023-09-07',
                endDate: '2023-10-31',
                myEvent: false,
            },
            {
                eventID: 3,
                representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                eventTitle: '화사의 ‘I Love My Body’ 프레임',
                startDate: '2023-09-07',
                endDate: '2023-10-31',
                myEvent: true,
            },
            {
                eventID: 4,
                representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                eventTitle: '화사의 ‘I Love My Body’ 프레임',
                startDate: '2023-09-07',
                endDate: '2023-10-31',
                myEvent: false,
            },
        ],
        review: [
            {
                reviewID: 1,
                representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                description: '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
                hashtag: ['3', '무릎', '생일', '고데기 있음', '소품 많음'],
            },
            {
                reviewID: 2,
                representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                description: '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
                hashtag: ['3', '무릎', '생일', '고데기 있음', '소품 많음'],
            },
        ],
    });

    return (
        <ScrollView>
            <PhotoBoothImageTitle photoboothData={photoboothData} />

            <PhotoBoothEvent eventData={photoboothData.event} />

            <OfficialImagesContainer>
                <OfficialImages
                    image={photoboothData.officialImage}
                    photoBoothName={photoboothData.photoboothName}
                    branchName=""
                />
            </OfficialImagesContainer>

            <PhotoDumpContainer>
                <PhotoDump photoBoothName={photoboothData.photoboothName} reviewData={photoboothData.review} />
            </PhotoDumpContainer>
        </ScrollView>
    );
}
