import axios from 'axios';
import Config from 'react-native-config';

export const fetchHomeReview = async (offset: number) => {
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/reviews`,
        params: {
            limit: 12,
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

export const fetchHomeEvent = async (offset: number) => {
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/events/home`,
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
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/photo-booths/brands/home`,
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
