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

export const RefreshAccessToken = async (refresh: string) => {
    return await axiosInstance({
        method: 'post',
        url: `/auth/jwt/refresh`,
        data: {
            refresh,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
