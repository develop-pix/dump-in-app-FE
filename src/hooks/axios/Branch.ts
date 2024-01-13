import { BACKEND_API_URL } from '@env';
import axios from 'axios';

//TODO: latitude, longitude, url -> branchID 수정
export const GetBranchData = async (latitude: number | null, longitude: number | null, branchID: string) => {
    return await axios({
        method: 'get',
        url: `${BACKEND_API_URL}/photo-booths/994ef416-92fa-46f3-b0be-eb8c1445a506`,
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

//TODO: url -> branchID 수정
export const GetBranchReviewData = async (branchID: string) => {
    return await axios({
        method: 'get',
        url: `${BACKEND_API_URL}/photo-booths/994ef416-92fa-46f3-b0be-eb8c1445a506/reviews`,
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
