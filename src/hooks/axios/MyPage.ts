import axios from 'axios';
import Config from 'react-native-config';

export const GetMyReviewList = async (accessToken: string, limit: number, offset: number) => {
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/users/reviews`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
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

export const GetMyPostList = async (accessToken: string, limit: number, offset: number) => {
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/users/reviews/likes`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
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

export const GetMyPhotoBoothList = async (accessToken: string, limit: number, offset: number) => {
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/users/photo-booths/likes`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
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

export const GetMyEventList = async (accessToken: string, limit: number, offset: number) => {
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/users/events/likes`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
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

export const GetMyUserData = async (accessToken: string) => {
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/users/detail`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const EditMyNickName = async (accessToken: string, nickname: string) => {
    return await axios({
        method: 'put',
        url: `${Config.BACKEND_API_URL}/users/detail`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        data: { nickname },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
