import axios from 'axios';
import Config from 'react-native-config';

export const sendTokenToServer = async (mobileToken: string) => {
    return await axios({
        method: 'post',
        url: `${Config.BACKEND_API_URL}/users/mobile-token`,
        params: {
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
