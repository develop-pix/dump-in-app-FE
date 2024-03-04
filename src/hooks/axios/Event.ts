import axios from 'axios';
import Config from 'react-native-config';

//TODO: 테스트 필요함
export const LikeEvent = async (accessToken: string, event_Id: number | null | undefined) => {
    return await axios({
        method: 'post',
        url: `${Config.BACKEND_API_URL}/events/${event_Id}/likes`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
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
