import { storage } from 'hooks/mmkv/storage';

import { axiosInstance } from './ApiHeader';

export const fetchNotificationList = async () => {
    const accessToken = storage.getString('token.accessToken');

    return await axiosInstance({
        method: 'get',
        url: `/users/notifications`,
        data: {
            accessToken,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const deleteNotificationList = async () => {
    const accessToken = storage.getString('token.accessToken');

    return await axiosInstance({
        method: 'delete',
        url: `/users/notifications`,
        data: {
            accessToken,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const fetchNotificationListCheck = async () => {
    const accessToken = storage.getString('token.accessToken');

    return await axiosInstance({
        method: 'get',
        url: `/users/notifications/check`,
        data: {
            accessToken,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const readNotification = async (id: string) => {
    const accessToken = storage.getString('token.accessToken');

    return await axiosInstance({
        method: 'put',
        url: `/users/notifications`,
        data: {
            accessToken,
        },
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
