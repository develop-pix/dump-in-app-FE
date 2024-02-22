import axios from 'axios';
import Config from 'react-native-config';

export const GetReviewData = async (reviewID: number) => {
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/reviews/${reviewID}`,
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyNTY3Njc0NjY2LCJpYXQiOjE3MDM3NjEwNjYsImp0aSI6ImQzYzdkMGY4Y2NlMzQ1NmJiYWRmZTViMDRmYTBhNjdiIiwidXNlcl9pZCI6MTN9.WF9ak0lHvvOBxT8jZ2hqb5nXtI-9IHtkbdh4TnBeQ2k',
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

//TODO:: 테스트 해보아야함
/**
 * Test
 * photoBoothId: 994ef416-92fa-46f3-b0be-eb8c1445a506
 * AccessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyNTY3Njc0NjY2LCJpYXQiOjE3MDM3NjEwNjYsImp0aSI6ImQzYzdkMGY4Y2NlMzQ1NmJiYWRmZTViMDRmYTBhNjdiIiwidXNlcl9pZCI6MTN9.WF9ak0lHvvOBxT8jZ2hqb5nXtI-9IHtkbdh4TnBeQ2k
 * */
export const LikeReview = async (reviewID: number | null | undefined) => {
    return await axios({
        method: 'post',
        url: `${Config.BACKEND_API_URL}/reviews/${reviewID}/likes`,
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyNTY3Njc0NjY2LCJpYXQiOjE3MDM3NjEwNjYsImp0aSI6ImQzYzdkMGY4Y2NlMzQ1NmJiYWRmZTViMDRmYTBhNjdiIiwidXNlcl9pZCI6MTN9.WF9ak0lHvvOBxT8jZ2hqb5nXtI-9IHtkbdh4TnBeQ2k',
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
