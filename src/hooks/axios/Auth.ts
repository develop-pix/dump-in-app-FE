import axios from 'axios';
import Config from 'react-native-config';

import { axiosInstance } from './ApiHeader';

export const NaverSocialLogin = async (accessToken: string | null, mobileToken: string | undefined) => {
    return await axiosInstance({
        method: 'post',
        url: `/auth/naver/login`,
        data: {
            accessToken,
            mobileToken,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const AppleSocialLogin = async (identifyToken: string | null | undefined, mobileToken: string | undefined) => {
    return await axiosInstance({
        method: 'post',
        url: `/auth/apple/login`,
        data: {
            identifyToken,
            mobileToken,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const KakaoSocialLogin = async (accessToken: string | null, mobileToken: string | undefined) => {
    return await axiosInstance({
        method: 'post',
        url: `/auth/kakao/login`,
        data: {
            accessToken,
            mobileToken,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const WithDrawalUser = async () => {
    return await axiosInstance({
        method: 'delete',
        url: `/users/detail`,
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const RefreshAccessToken = async (refresh: string, refreshTokenExpireAt: string) => {
    const currentDate = new Date();
    const refreshExpireDate = new Date(refreshTokenExpireAt);
    // const timeParams = 7 * 24 * 60 * 60 * 1000;
    const timeParams = 2 * 60 * 1000;

    const gapTime = refreshExpireDate.getTime() - currentDate.getTime();
    const refreshCheck: boolean = gapTime < timeParams;

    return await axios({
        method: 'post',
        url: `${Config.BACKEND_API_URL}/auth/jwt/refresh`,
        data: {
            refresh,
            isRefreshGenerated: refreshCheck,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
