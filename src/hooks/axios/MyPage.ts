import { axiosInstance } from './api-header';

export const GetMyReviewList = async (limit: number, offset: number) => {
    return await axiosInstance({
        method: 'get',
        url: `/users/reviews`,
        params: {
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

export const GetMyPostList = async (limit: number, offset: number) => {
    return await axiosInstance({
        method: 'get',
        url: `/users/reviews/likes`,
        params: {
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

export const GetMyPhotoBoothList = async (limit: number, offset: number) => {
    return await axiosInstance({
        method: 'get',
        url: `/users/photo-booths/likes`,
        params: {
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

export const GetMyEventList = async (limit: number, offset: number) => {
    return await axiosInstance({
        method: 'get',
        url: `/users/events/likes`,
        params: {
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

export const GetMyUserData = async () => {
    return await axiosInstance({
        method: 'get',
        url: `/users/detail`,
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const EditMyNickName = async (nickname: string) => {
    return await axiosInstance({
        method: 'put',
        url: `/users/detail`,
        data: { nickname },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
