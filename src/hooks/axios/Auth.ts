import axios from 'axios';
import Config from 'react-native-config';

export const NaverSocialLogin = async (token: string | null) => {
    return await axios({
        method: 'post',
        url: `${Config.BACKEND_API_URL}/auth/naver/login`,
        data: {
            accessToken: token,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const AppleSocialLogin = async (token: string | null) => {
    return await axios({
        method: 'post',
        url: `${Config.BACKEND_API_URL}/auth/apple/login`,
        data: {
            accessToken: token,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const KakaoSocialLogin = async (token: string | null) => {
    return await axios({
        method: 'post',
        url: `${Config.BACKEND_API_URL}/auth/kakao/login`,
        data: {
            accessToken: token,
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
export const RefreshAccessToken = async (token: string | null) => {
    return await axios({
        method: 'post',
        url: `${Config.BACKEND_API_URL}/auth/jwt/refresh`,
        data: {
            accessToken: token,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
