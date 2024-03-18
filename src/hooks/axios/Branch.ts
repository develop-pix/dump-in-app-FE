import { axiosInstance } from './ApiHeader';

export const GetBranchData = async (latitude: number | null, longitude: number | null, branchID: string) => {
    return await axiosInstance({
        method: 'get',
        url: `/photo-booths/${branchID}`,
        params: {
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

export const LikeBranch = async (photoBoothId: string | null | undefined) => {
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
