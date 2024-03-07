import { axiosInstance } from './ApiHeader';

//TODO: latitude, longitude, radius 가 backend에서 수정될 예정, 추후 변경

/**
 * Test
 * photo_booth_brand_name: string
 * latitude: 36.8101475281
 * longitude: 127.1470316068
 * */
export const GetLocationSearchData = async (
    photo_booth_brand_name: string | null,
    latitude: number | null,
    longitude: number | null,
    radius: number,
) => {
    return await axiosInstance({
        method: 'get',
        url: `/photo-booths/locations/search`,

        params: {
            photo_booth_brand_name,
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

export const GetReviewLocationSearchData = async (photo_booth_name: string | null, limit: number, offset: number) => {
    return await axiosInstance({
        method: 'get',
        url: `/reviews/photo-booths/locations/search`,
        params: {
            photo_booth_name,
            limit,
            offset,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
