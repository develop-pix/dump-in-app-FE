import { axiosInstance } from './ApiHeader';

export const GetDetailPhotoBoothBrandData = async (photo_booth_brand_id: number) => {
    return await axiosInstance({
        method: 'get',
        url: `/photo-booths/brands/${photo_booth_brand_id}`,
        params: {
            photo_booth_brand_id,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const GetPhotoBoothEventList = async (photo_booth_brand_id: number, limit: number) => {
    return await axiosInstance({
        method: 'get',
        url: `/photo-booths/brands/${photo_booth_brand_id}/events`,
        params: {
            photo_booth_brand_id,
            limit,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const GetPhotoBoothReviewList = async (photo_booth_brand_id: number, limit: number) => {
    return await axiosInstance({
        method: 'get',
        url: `/photo-booths/brands/${photo_booth_brand_id}/reviews`,
        params: {
            photo_booth_brand_id,
            limit,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
