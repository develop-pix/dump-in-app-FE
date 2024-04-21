import { FilterProps } from 'interfaces/reuse/Filter.interface';

import { axiosInstance } from './ApiHeader';

export const fetchHomeReview = async (offset: number, filterData: FilterProps) => {
    const searchParams = new URLSearchParams();

    filterData.photoBoothLocation &&
        searchParams.append('photo_booth_location', filterData.photoBoothLocation?.toString());
    filterData.frameColor && searchParams.append('frame_color', filterData.frameColor?.toString());
    filterData.participants && searchParams.append('participants', filterData.participants?.toString());
    filterData.cameraShot && searchParams.append('camera_shot', filterData.cameraShot?.toString());
    filterData.concept &&
        filterData.concept.length > 0 &&
        filterData.concept.forEach((tag: string) => {
            searchParams.append('concept', tag);
        });
    searchParams.append('limit', '12');
    searchParams.append('offset', offset.toString());

    try {
        const response = await axiosInstance.get(`/reviews?${searchParams}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const fetchReviewCount = async (filterData: FilterProps) => {
    const searchParams = new URLSearchParams();

    filterData.photoBoothLocation &&
        searchParams.append('photo_booth_location', filterData.photoBoothLocation?.toString());
    filterData.frameColor && searchParams.append('frame_color', filterData.frameColor?.toString());
    filterData.participants && searchParams.append('participants', filterData.participants?.toString());
    filterData.cameraShot && searchParams.append('camera_shot', filterData.cameraShot?.toString());
    filterData.concept &&
        filterData.concept.length > 0 &&
        filterData.concept.forEach((tag: string) => {
            searchParams.append('concept', tag);
        });
    try {
        const response = await axiosInstance.get(`/reviews/count?${searchParams}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
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
