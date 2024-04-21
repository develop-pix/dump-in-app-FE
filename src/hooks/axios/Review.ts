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
    review_type: string,
    photo_booth_location: string | undefined,
    frame_color: string | undefined,
    participants: number | undefined,
    camera_shot: string | undefined,
    concept: string[] | undefined,
    keyword: string | undefined,
    is_event_review: boolean | undefined,
    review_id: number,
) => {
    const searchParams = new URLSearchParams();
    console.log('GetReviewReels Inside Data');
    console.log('review_type');
    console.log(review_type);
    console.log('photo_booth_location');
    console.log(photo_booth_location);
    console.log('frame_color');
    console.log(frame_color);
    console.log('participants');
    console.log(participants);
    console.log('camera_shot');
    console.log(camera_shot);
    console.log('concept');
    console.log(concept);
    console.log('review_id');
    console.log(review_id);

    /**FIXME: keyword, prev_review_id, is_event_review 확인 */
    searchParams.append('review_type', review_type.toString());

    photo_booth_location && searchParams.append('photo_booth_location', photo_booth_location?.toString());

    frame_color && searchParams.append('frame_color', frame_color?.toString());

    participants && searchParams.append('participants', participants?.toString());

    camera_shot && searchParams.append('camera_shot', camera_shot?.toString());

    concept &&
        concept.length > 0 &&
        concept.forEach((tag: string) => {
            searchParams.append('concept', tag);
        });

    keyword && searchParams.append('keyword', keyword?.toString());

    is_event_review && searchParams.append('is_event_review', is_event_review?.toString());

    searchParams.append('review_id', review_id?.toString());

    console.log(searchParams);
    try {
        const response = await axiosInstance.get(`/reviews/${review_id}/reels?${searchParams}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
