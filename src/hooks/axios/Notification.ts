import { axiosInstance } from './ApiHeader';

export const fetchNotificationList = async () => {
    return await axiosInstance({
        method: 'get',
        url: `/users/notifications`,
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
