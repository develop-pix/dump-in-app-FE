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

// TODO: 아래 둘중 테스트

// export const GetReviewReels = async (
//     prev_review_id: number,
//     review_type: string,
//     frame_color: string,
//     participants: number,
//     camera_shot: string,
//     concept: string,
//     review_id: number,
// ) => {
//     return await axiosInstance({
//         method: 'get',
//         url: `/reviews/${review_id}/reels`,
//         params: {
//             prev_review_id,
//             review_type,
//             frame_color,
//             participants,
//             camera_shot,
//             concept,
//             review_id,
//         },
//     })
//         .then(res => {
//             return res.data;
//         })
//         .catch(error => {
//             console.log(error);
//         });
// };

export const GetReviewReels = async (
    prev_review_id: number,
    review_type: string,
    frame_color: string,
    participants: number,
    camera_shot: string,
    concept: string[],
    review_id: number,
) => {
    const searchParams = new URLSearchParams();

    searchParams.append('prev_review_id', prev_review_id.toString());
    searchParams.append('review_type', review_type.toString());
    searchParams.append('frame_color', frame_color.toString());
    searchParams.append('participants', participants.toString());
    searchParams.append('camera_shot', camera_shot.toString());
    concept.forEach((tag: string) => {
        searchParams.append('hashtag', tag);
    });
    searchParams.append('review_id', review_id.toString());

    try {
        const response = await axiosInstance.get(`/reviews/${review_id}/reels?${searchParams}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};