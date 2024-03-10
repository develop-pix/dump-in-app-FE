import axios from 'axios';
import Config from 'react-native-config';

import { axiosInstance } from './ApiHeader';

export const GetReviewData = async (reviewID: number) => {
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/reviews/${reviewID}`,
        params: {
            review_id: reviewID,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const LikeReview = async (accessToken: string, reviewID: number | null | undefined) => {
    return await axiosInstance({
        method: 'post',
        url: `/reviews/${reviewID}/likes`,
        data: {
            review_ID: reviewID,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
