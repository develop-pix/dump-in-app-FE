import { axiosInstance } from './ApiHeader';

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
            latitude,
            longitude,
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
