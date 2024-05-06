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

export const GetEventList = async (hashtags: string[], limit: number, offset: number) => {
    const searchParams = new URLSearchParams();
    hashtags.forEach((tag: string) => {
        searchParams.append('hashtag', tag);
    });

    searchParams.append('limit', limit.toString());
    searchParams.append('offset', offset.toString());

    try {
        const response = await axiosInstance.get(`/events?${searchParams}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
