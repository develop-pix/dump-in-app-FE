import axios from 'axios';
import Config from 'react-native-config';

export const fetchHomeReview = async () => {
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/reviews`,
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const fetchHomeEvent = async () => {
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/events/home`,
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const fetchHomePhotoBooth = async () => {
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/photo-booths/brands/home`,
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
