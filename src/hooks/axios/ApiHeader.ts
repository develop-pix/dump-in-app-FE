import axios, { AxiosRequestConfig } from 'axios';
import Config from 'react-native-config';

import { storage } from 'hooks/mmkv/storage';
import { setIsLoggedIn } from 'hooks/redux/loginSlice';
import store from 'hooks/redux/store';

import { RefreshAccessToken } from './Auth';

const { dispatch } = store;

const axiosConfig: AxiosRequestConfig = { baseURL: `${Config.BACKEND_API_URL}` };
export const axiosInstance = axios.create(axiosConfig);

/** 모든 요청의 헤더에 토큰 넣어 보내기 */
axiosInstance.interceptors.request.use(config => {
    const accessToken = storage.getString('token.accessToken');
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

/** token 재발급 요청, 실패시 로그아웃 처리(refreshToken도 만료)  */
const reIssueToken = async () => {
    const refreshToken = storage.getString('token.refreshToken');
    const refreshTokenExpireAt = storage.getString('token.refreshTokenExpire');
    try {
        if (refreshToken && refreshTokenExpireAt) {
            const result = await RefreshAccessToken(refreshToken, refreshTokenExpireAt);
            if (result.data) {
                storage.set('token.accessToken', result.data.accessToken.token);
                if (result.data.refreshToken) {
                    result.data.refreshToken.token && storage.set('token.refreshToken', result.data.refreshToken.token);
                    result.data.refreshToken.expiredAt &&
                        storage.set('token.refreshTokenExpire', result.data.refreshToken.expiredAt);
                }
            }
        }

        return storage.getString('accessToken');
    } catch (error) {
        console.log('Token교체 에러 ' + error);
        dispatch(setIsLoggedIn(false));
        storage.delete('token.accessToken');
        storage.delete('token.refreshToken');
    }
};

/** 401 에러(token 오류)시 reissue */
axiosInstance.interceptors.response.use(
    // 정상 응답 처리
    response => {
        return response;
    },
    // 에러 처리
    async error => {
        const { config, response } = error;

        // 토큰 자동 재발급 필요 외 다른 에러
        if (config.url === `/auth/jwt/refresh` || response?.status !== 401 || config.sent) {
            return Promise.reject(error);
        }

        config.sent = true;
        const accessToken = await reIssueToken();

        if (accessToken) {
            config.headers.Authorization = accessToken;
        }

        return axiosInstance(config);
    },
);
