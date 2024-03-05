import axios from 'axios';
import Config from 'react-native-config';

export const GetReviewData = async (accessToken: string | undefined, reviewID: number) => {
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/reviews/${reviewID}`,
        headers: {
            Authorization: accessToken ? `Bearer ${accessToken}` : null,
        },
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
    return await axios({
        method: 'post',
        url: `${Config.BACKEND_API_URL}/reviews/${reviewID}/likes`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
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
