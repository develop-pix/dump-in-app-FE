import { axiosInstance } from './ApiHeader';

export const GetReviewData = async (reviewID: number) => {
    return await axiosInstance({
        method: 'get',
        url: `/reviews/${reviewID}`,
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

export const LikeReview = async (reviewID: number | null | undefined) => {
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

export const DeleteReview = async (review_id: number | null | undefined) => {
    console.log(review_id);
    return await axiosInstance({
        method: 'delete',
        url: `/reviews/${review_id}`,
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
