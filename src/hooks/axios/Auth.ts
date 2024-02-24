import axios from 'axios';
import Config from 'react-native-config';

export const NaverSocialLogin = async (accessToken: string | null) => {
    return await axios({
        method: 'post',
        url: `${Config.BACKEND_API_URL}/auth/naver/login`,
        data: {
            accessToken,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const AppleSocialLogin = async (accessToken: string | null) => {
    return await axios({
        method: 'post',
        url: `${Config.BACKEND_API_URL}/auth/apple/login`,
        data: {
            accessToken,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const KakaoSocialLogin = async (accessToken: string | null) => {
    return await axios({
        method: 'post',
        url: `${Config.BACKEND_API_URL}/auth/kakao/login`,
        data: {
            accessToken,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

//FIXME: API 명세 질문 후 수정
export const RefreshAccessToken = async (accessToken: string | null) => {
    return await axios({
        method: 'post',
        url: `${Config.BACKEND_API_URL}/auth/jwt/refresh`,
        data: {
            accessToken,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
