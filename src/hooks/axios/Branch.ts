import axios from 'axios';
import Config from 'react-native-config';

//TODO: latitude, longitude, url -> branchID 수정

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
            latitude: latitude,
            longitude: longitude,
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
