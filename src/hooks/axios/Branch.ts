import { axiosInstance } from './api-header';

export const GetBranchData = async (latitude: number | null, longitude: number | null, photo_booth_id: string) => {
    return await axiosInstance({
        method: 'get',
        url: `/photo-booths/${photo_booth_id}`,
        params: {
            photo_booth_id,
            latitude,
            longitude,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const GetBranchReviewData = async (branchID: string) => {
    return await axiosInstance({
        method: 'get',
        url: `/photo-booths/${branchID}/reviews`,
        params: {
            limit: 15,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const LikeBranch = async (accessToken: string, photoBoothId: string | null | undefined) => {
    return await axiosInstance({
        method: 'post',
        url: `/photo-booths/${photoBoothId}/likes`,
        data: {
            photoBoothId,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
