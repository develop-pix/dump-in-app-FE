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

export const deleteNotificationList = async () => {
    return await axiosInstance({
        method: 'delete',
        url: `/users/notifications`,
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const fetchNotificationListCheck = async () => {
    return await axiosInstance({
        method: 'get',
        url: `/users/notifications/check`,
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const readNotification = async (id: string) => {
    return await axiosInstance({
        method: 'put',
        url: `/users/notifications`,
        params: {
            notification_id: id,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
