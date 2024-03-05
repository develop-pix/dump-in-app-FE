import { axiosInstance } from './ApiHeader';

//TODO: 테스트 필요함
export const LikeEvent = async (event_Id: number | null | undefined) => {
    return await axiosInstance({
        method: 'post',
        url: `/events/${event_Id}/likes`,
        data: {
            event_Id,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
