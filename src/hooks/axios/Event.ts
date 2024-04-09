import { axiosInstance } from './ApiHeader';

export const GetEventData = async (event_Id: number) => {
    return await axiosInstance({
        method: 'get',
        url: `/events/${event_Id}`,
        params: {
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
