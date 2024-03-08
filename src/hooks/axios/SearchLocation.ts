import { axiosInstance } from './ApiHeader';

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
    return await axiosInstance({
        method: 'get',
        url: `/photo-booths/locations/search`,

        params: {
            photo_booth_brand_name: branchName,
            latitude: 36.8101475281,
            longitude: 127.1470316068,
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
