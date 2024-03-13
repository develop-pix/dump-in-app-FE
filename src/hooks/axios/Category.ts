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

//TODO: hashtag 수정필요 (배열? string?)
export const GetEventList = async (hashtag: string[], limit: number, offset: number) => {
    return await axiosInstance({
        method: 'get',
        url: `/events`,
        params: {
            hashtag: hashtag[0],
            limit,
            offset,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
