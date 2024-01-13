import { useEffect, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import { useDispatch } from 'react-redux';

import OfficialImages from 'components/reuse/official-images/OfficialImages';
import PhotoDump from 'components/reuse/photo-dump/PhotoDump';
import { GetBranchData, GetBranchReviewData } from 'hooks/axios/Branch';
import { setCurrentLocation } from 'hooks/redux/Location';
import { useAppSelector } from 'hooks/redux/store';
import { BranchData, ReviewData } from 'interfaces/Branch.interface';
import { BranchParamList } from 'interfaces/NavigationBar';
import { BranchForm, BranchScrollView } from 'styles/layout/branch/Branch.style';
import { GetLocationAuthorization } from 'utils/GetLocation';

import BranchInfo from './BranchInfo';
import BranchLocation from './BranchLocation';

export default function Branch() {
    const dispatch = useDispatch();
    const currentLocation = useAppSelector(state => state.location);
    const route = useRoute<RouteProp<BranchParamList, 'branchType'>>();
    const [branchData, setBranchData] = useState<BranchData>({
        id: '',
        name: '',
        latitude: 37.564362,
        longitude: 126.977011,
        streetAddress: '',
        roadAddress: '',
        isLiked: false,
        distance: '알 수 없음',
        operationTime: '',
        photoBoothBrand: {
            name: '',
            image: [],
            hashtag: [],
        },
    });
    const [reviewData, setReviewData] = useState<ReviewData[]>([]);

    /** Branch 정보 및 PhotoDump 리뷰 정보 획득 */
    const GetBranchDetailData = async (latitude: number | null, longitude: number | null, branchID: string) => {
        const fetchBranchData = await GetBranchData(latitude, longitude, branchID);
        const fetchReviewData = await GetBranchReviewData(route.params.branchID);
        console.log(fetchReviewData.data);
        setBranchData(fetchBranchData.data);
        setReviewData(fetchReviewData.data);
    };

    /** 초기 위치 설정 */
    const GetCurrentLocation = () => {
        const watchID = Geolocation.watchPosition(
            position => {
                dispatch(
                    setCurrentLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude }),
                );
            },
            error => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true },
        );

        return watchID;
    };

    /** Branch 페이지로 이동시 위치 권한 획득 */
    useEffect(() => {
        let watch = -1;
        GetLocationAuthorization()
            .then(result => {
                if (result === 'granted') {
                    watch = GetCurrentLocation();
                }
                GetBranchDetailData(currentLocation.latitude, currentLocation.longitude, route.params.branchID);
            })
            .catch(e => {
                console.log(e);
            });

        return () => {
            if (watch === 0) {
                Geolocation.clearWatch(watch);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BranchScrollView>
            <BranchForm>
                <BranchLocation
                    latitude={branchData?.latitude}
                    longitude={branchData?.longitude}
                    distance={branchData?.distance}
                />
                <BranchInfo
                    photoBoothName={branchData?.photoBoothBrand.name}
                    branchName={branchData?.name}
                    branchHashtag={branchData?.photoBoothBrand.hashtag}
                    loadAddress={branchData?.roadAddress}
                    streetAddress={branchData?.streetAddress}
                    operationTime={branchData?.operationTime}
                    isLiked={branchData?.isLiked}
                />
                <OfficialImages
                    photoBoothName={branchData.photoBoothBrand.name}
                    image={branchData.photoBoothBrand.image}
                />
                <PhotoDump reviewData={reviewData} photoBoothName={branchData?.photoBoothBrand.name} />
            </BranchForm>
        </BranchScrollView>
    );
}
