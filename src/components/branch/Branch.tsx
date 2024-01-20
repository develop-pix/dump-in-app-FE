import { useRoute } from '@react-navigation/native';

import OfficialImages from 'components/reuse/official-images/OfficialImages';
import PhotoDump from 'components/reuse/photo-dump/PhotoDump';
import { BranchData } from 'interfaces/Branch.interface';
import { LocationStackScreenProps } from 'interfaces/Navigation.interface';
import { BranchForm, BranchScrollView } from 'styles/layout/branch/Branch.style';

import BranchInfo from './BranchInfo';
import BranchLocation from './BranchLocation';

export default function Branch() {
    const route = useRoute<LocationStackScreenProps<'Branch'>['route']>();

    /** 임시 데이터, myBranch는 앱 로그인 할때 전부 저장? */
    const tempData: BranchData[] = [
        {
            branchID: 1,
            branchName: '동대문 현대아울렛점',
            branchHashtag: ['일상', '가족', '우정샷'],
            photoBoothName: '인생네컷',
            geolocation: {
                latitude: 37.564362,
                longitude: 126.977011,
            },
            distance: 300,
            address: '서울 중구 장충단로13길 20 1층',
            open: '24시간 영업',
            officialImage: [
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            ],
            myBranch: true,
            review: [
                {
                    reviewID: 1,
                    representativeImage:
                        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    hashtag: ['무릎', '생일', '고데기 있음'],
                    description: '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
                },
                {
                    reviewID: 8,
                    representativeImage:
                        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    hashtag: ['무릎', '생일', '고데기 있음'],
                    description: '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 35글자임',
                },
                {
                    reviewID: 9,
                    representativeImage:
                        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    hashtag: ['무릎', '생일', '고데기 있음'],
                    description: '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 40글자임',
                },
            ],
        },
        {
            branchID: 2,
            branchName: '한양대점',
            branchHashtag: ['일상', '가족', '우정샷'],
            photoBoothName: '인생네컷',
            geolocation: {
                latitude: 37.564362,
                longitude: 126.977011,
            },
            distance: 450,
            address: '서울 성동구 마조로 25',
            open: '24시간 영업',
            officialImage: [
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            ],
            myBranch: false,
            review: [
                {
                    reviewID: 2,
                    representativeImage:
                        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    hashtag: ['무릎', '생일', '고데기 있음', '소품 많음'],
                    description: '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
                },
                {
                    reviewID: 10,
                    representativeImage:
                        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    hashtag: ['무릎', '생일', '고데기 있음'],
                    description: '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 45글자임',
                },
                {
                    reviewID: 11,
                    representativeImage:
                        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    hashtag: ['무릎', '생일', '고데기 있음'],
                    description:
                        '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 50글자임',
                },
            ],
        },
        {
            branchID: 3,
            branchName: '혜화로터리점',
            branchHashtag: ['일상', '가족', '우정샷'],
            photoBoothName: '인생네컷',
            geolocation: {
                latitude: 37.564362,
                longitude: 126.977011,
            },
            address: '서울 종로구 대명길 42 1층 인생네컷',
            open: '24시간 영업',
            distance: 880,
            officialImage: [
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            ],
            myBranch: true,
            review: [
                {
                    reviewID: 3,
                    representativeImage:
                        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    hashtag: ['일상', '연예인', '크리스마스'],
                    description:
                        '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 55글자임',
                },
            ],
        },
        {
            branchID: 4,
            branchName: '영등포 타임스퀘어점',
            branchHashtag: ['일상', '가족', '우정샷'],
            photoBoothName: '인생네컷',
            geolocation: {
                latitude: 37.564362,
                longitude: 126.977011,
            },
            open: '24시간 영업',
            address: '서울 영등포구 영중로4길 17 1, 2층',
            distance: 999,
            officialImage: [
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            ],
            myBranch: false,
            review: [
                {
                    reviewID: 4,
                    representativeImage:
                        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    hashtag: ['무릎', '소품 많음', '고데기 있음'],
                    description: '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
                },
            ],
        },
        {
            branchID: 5,
            branchName: '광화문교보문고점',
            branchHashtag: ['일상', '가족', '우정샷'],
            photoBoothName: '인생네컷',
            geolocation: {
                latitude: 37.564362,
                longitude: 126.977011,
            },
            open: '24시간 영업',
            distance: 1200,
            address: '서울 종로구 자하문로2길 17-2 1층 인생네컷',
            officialImage: [],
            myBranch: true,
            review: [],
        },
        {
            branchID: 6,
            branchName: 'abc점',
            branchHashtag: ['일상', '가족', '우정샷', '기타'],
            photoBoothName: 'Test',
            geolocation: {
                latitude: 37.564362,
                longitude: 126.977011,
            },
            open: '24시간 영업',
            distance: 999.9,
            address: '서울 용산구 청파로45길 24 232 421 4234 5435 2342 3423 321312 test',
            officialImage: [
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            ],
            myBranch: true,
            review: [
                {
                    reviewID: 6,
                    representativeImage:
                        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    hashtag: ['콜라보', '커플', '고데기 있음', '앵글'],
                    description: '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
                },
                {
                    reviewID: 10,
                    representativeImage:
                        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    hashtag: ['일상', '연예인', '크리스마스'],
                    description:
                        '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 55글자임',
                },
                {
                    reviewID: 11,
                    representativeImage:
                        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    hashtag: ['이달의 프레임', '생일', '고데기 있음'],
                    description:
                        '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 60글자임',
                },
                {
                    reviewID: 12,
                    representativeImage:
                        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    hashtag: ['무릎', '생일', '고데기 있음', '소품 많음'],
                    description: '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 35글자임',
                },
            ],
        },
        {
            branchID: 7,
            branchName: '1234점',
            branchHashtag: ['일상'],
            photoBoothName: 'Test2',
            geolocation: {
                latitude: 37.564362,
                longitude: 126.977011,
            },
            open: '24시간 영업',
            distance: 119.9,
            address: '서울 용산구 청파로47길 11',
            officialImage: [
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            ],
            myBranch: false,
            review: [
                {
                    reviewID: 7,
                    representativeImage:
                        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    hashtag: ['무릎', '생일', '고데기 있음'],
                    description: '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
                },
                {
                    reviewID: 13,
                    representativeImage:
                        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    hashtag: ['일상', '연예인', '크리스마스'],
                    description:
                        '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 55글자임',
                },
                {
                    reviewID: 14,
                    representativeImage:
                        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                    hashtag: ['일상', '연예인', '크리스마스'],
                    description:
                        '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 55글자임',
                },
            ],
        },
    ];

    return (
        <BranchScrollView>
            {tempData.map(data => {
                if (data.branchID === route.params.branchID) {
                    return (
                        <BranchForm key={data.branchID}>
                            <BranchLocation geolocation={data.geolocation} distance={data.distance} />
                            <BranchInfo
                                photoBoothName={data.photoBoothName}
                                branchName={data.branchName}
                                branchHashtag={data.branchHashtag}
                                address={data.address}
                                open={data.open}
                                myBranch={data.myBranch}
                            />
                            <OfficialImages photoBoothName={data.photoBoothName} image={data.officialImage} />
                            <PhotoDump reviewData={data.review} photoBoothName={data.photoBoothName} />
                        </BranchForm>
                    );
                }
            })}
        </BranchScrollView>
    );
}
