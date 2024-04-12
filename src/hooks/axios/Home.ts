import { FilterProps } from 'interfaces/reuse/Filter.interface';

import { axiosInstance } from './ApiHeader';

export const fetchHomeReview = async (offset: number, filterData: FilterProps) => {
    return await axiosInstance({
        method: 'get',
        url: `/reviews`,
        params: {
            limit: 12,
            offset,
            photoBoothLocation: filterData.photoBoothLocation === '' ? null : filterData.photoBoothLocation,
            frameColor: filterData.frameColor === '' ? null : filterData.frameColor,
            participants: filterData.participants === 0 ? null : filterData.participants,
            cameraShot: filterData.cameraShot === '' ? null : filterData.cameraShot,
            concept: filterData.concept.length === 0 ? null : filterData.concept,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const fetchReviewCount = async (filterData: FilterProps) => {
    return await axiosInstance({
        method: 'get',
        url: `reviews/count`,
        params: {
            photoBoothLocation: filterData.photoBoothLocation === '' ? null : filterData.photoBoothLocation,
            frameColor: filterData.frameColor === '' ? null : filterData.frameColor,
            participants: filterData.participants === 0 ? null : filterData.participants,
            cameraShot: filterData.cameraShot === '' ? null : filterData.cameraShot,
            concept: filterData.concept.length === 0 ? null : filterData.concept,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const fetchHomeEvent = async (offset: number) => {
    return await axiosInstance({
        method: 'get',
        url: `/events/home`,
        params: {
            limit: 3,
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

export const fetchHomePhotoBooth = async (offset: number) => {
    return await axiosInstance({
        method: 'get',
        url: `/photo-booths/brands/home`,
        params: {
            limit: 3,
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
