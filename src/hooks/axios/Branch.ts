import { BACKEND_API_URL } from '@env';
import axios from 'axios';

//TODO: 안쓰는 데이터 수정되면, 추가 및 정리

export const GetBranchData = async (latitude: number | null, longitude: number | null, branchID: string) => {
    return await axios({
        method: 'get',
        url: `${BACKEND_API_URL}/photo-booths/994ef416-92fa-46f3-b0be-eb8c1445a506`,
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyNTY3Njc0NjY2LCJpYXQiOjE3MDM3NjEwNjYsImp0aSI6ImQzYzdkMGY4Y2NlMzQ1NmJiYWRmZTViMDRmYTBhNjdiIiwidXNlcl9pZCI6MTN9.WF9ak0lHvvOBxT8jZ2hqb5nXtI-9IHtkbdh4TnBeQ2k',
        },
        params: {
            latitude: 36.8101475281,
            longitude: 127.1470316068,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const GetBranchReviewData = async (branchID: string) => {
    return await axios({
        method: 'get',
        url: `${BACKEND_API_URL}/photo-booths/994ef416-92fa-46f3-b0be-eb8c1445a506/reviews`,
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyNTY3Njc0NjY2LCJpYXQiOjE3MDM3NjEwNjYsImp0aSI6ImQzYzdkMGY4Y2NlMzQ1NmJiYWRmZTViMDRmYTBhNjdiIiwidXNlcl9pZCI6MTN9.WF9ak0lHvvOBxT8jZ2hqb5nXtI-9IHtkbdh4TnBeQ2k',
        },
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
