import axios from 'axios';
import Config from 'react-native-config';

/**
 * Test
 * latitude: 36.8101475281
 * longitude: 127.1470316068
 * branchID: 994ef416-92fa-46f3-b0be-eb8c1445a506
 * */
export const GetBranchData = async (latitude: number | null, longitude: number | null, branchID: string) => {
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/photo-booths/${branchID}`,
        params: {
            latitude,
            longitude,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

/**
 * Test
 * branchID: 994ef416-92fa-46f3-b0be-eb8c1445a506
 * */
export const GetBranchReviewData = async (branchID: string) => {
    return await axios({
        method: 'get',
        url: `${Config.BACKEND_API_URL}/photo-booths/${branchID}/reviews`,
        params: {
            limit: 15,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

/**
 * Test
 * photoBoothId: 994ef416-92fa-46f3-b0be-eb8c1445a506
 * AccessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyNTY3Njc0NjY2LCJpYXQiOjE3MDM3NjEwNjYsImp0aSI6ImQzYzdkMGY4Y2NlMzQ1NmJiYWRmZTViMDRmYTBhNjdiIiwidXNlcl9pZCI6MTN9.WF9ak0lHvvOBxT8jZ2hqb5nXtI-9IHtkbdh4TnBeQ2k
 * */
export const LikeBranch = async (photoBoothId: string | null | undefined) => {
    return await axios({
        method: 'post',
        url: `${Config.BACKEND_API_URL}/photo-booths/${photoBoothId}/likes`,
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyNTY3Njc0NjY2LCJpYXQiOjE3MDM3NjEwNjYsImp0aSI6ImQzYzdkMGY4Y2NlMzQ1NmJiYWRmZTViMDRmYTBhNjdiIiwidXNlcl9pZCI6MTN9.WF9ak0lHvvOBxT8jZ2hqb5nXtI-9IHtkbdh4TnBeQ2k',
        },
        data: {
            photoBoothId,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
