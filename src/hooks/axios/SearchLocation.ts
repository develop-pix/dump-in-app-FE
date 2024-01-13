import { BACKEND_API_URL } from '@env';
import axios from 'axios';

export const GetLocationSearchData = async (
    branchName: string | null,
    latitude: number | null,
    longitude: number | null,
    radius: number,
) => {
    return await axios({
        method: 'get',
        url: `${BACKEND_API_URL}/photo-booths/locations/search`,
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyNTY3Njc0NjY2LCJpYXQiOjE3MDM3NjEwNjYsImp0aSI6ImQzYzdkMGY4Y2NlMzQ1NmJiYWRmZTViMDRmYTBhNjdiIiwidXNlcl9pZCI6MTN9.WF9ak0lHvvOBxT8jZ2hqb5nXtI-9IHtkbdh4TnBeQ2k',
        },
        params: {
            photo_booth_brand_name: branchName,
            latitude,
            longitude,
            radius,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
            return [];
        });
};
