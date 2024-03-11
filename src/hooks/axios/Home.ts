import axios from 'axios';
import Config from 'react-native-config';

import { FilterProps } from 'interfaces/reuse/Filter.interface';

export const fetchHomeReview = async (offset: number, filterData: FilterProps) => {
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/reviews`,
        params: {
            limit: 12,
            offset,
            photoBoothLocation: filterData.photoBoothLocation === '' ? null : filterData.photoBoothLocation,
            frameColor: filterData.frameColor === '' ? null : filterData.frameColor,
            participants: filterData.participants === 0 ? null : filterData.participants,
            cameraShot: filterData.cameraShot === '' ? null : filterData.cameraShot,
            concept: filterData.concept.length === 0 ? null : JSON.stringify(filterData.concept),
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
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/reviews/count`,
        params: {
            photoBoothLocation: filterData.photoBoothLocation === '' ? null : filterData.photoBoothLocation,
            frameColor: filterData.frameColor === '' ? null : filterData.frameColor,
            participants: filterData.participants === 0 ? null : filterData.participants,
            cameraShot: filterData.cameraShot === '' ? null : filterData.cameraShot,
            concept: filterData.concept.length === 0 ? null : JSON.stringify(filterData.concept),
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
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/events/home`,
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
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/photo-booths/brands/home`,
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
