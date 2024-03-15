import { axiosInstance } from './ApiHeader';

export const GetPhotoBoothBrandsList = async () => {
    return await axiosInstance({
        method: 'get',
        url: `/photo-booths/brands`,
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
