import { BACKEND_API_URL } from '@env';
import axios from 'axios';

//TODO: latitude, longitude, radius 가 backend에서 수정될 예정, 추후 변경

/**
 * Test
 * branchName: string
 * latitude: 36.8101475281
 * longitude: 127.1470316068
 * */
export const GetLocationSearchData = async (
    branchName: string | null,
    latitude: number | null,
    longitude: number | null,
    radius: number,
) => {
    return await axios({
        method: 'get',
        url: `${BACKEND_API_URL}/photo-booths/locations/search`,

        params: {
            photo_booth_brand_name: branchName,
            latitude: longitude,
            longitude: latitude,
            radius,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
