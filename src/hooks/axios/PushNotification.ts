import { axiosInstance } from './ApiHeader';

export const sendTokenToServer = async (mobileToken: string) => {
    return await axiosInstance({
        method: 'post',
        url: `/users/mobile-token`,
        data: {
            mobileToken,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
