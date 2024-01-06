import { NAVER_MAP_API_ID, NAVER_MAP_API_KEY } from '@env';
import axios from 'axios';

export const getAddressFromNaverGeocoding = async (latitude: number, longitude: number) => {
    // 소수점 7자리 명시
    const str_latitude: string = latitude.toFixed(7);
    const str_longitude: string = longitude.toFixed(7);
    const URL =
        'https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?request=coordsToaddr&coords=' +
        str_longitude +
        ',' +
        str_latitude +
        '&sourcecrs=epsg:4326&output=json&orders=addr';

    return await axios
        .get(URL, {
            headers: {
                'X-NCP-APIGW-API-KEY-ID': NAVER_MAP_API_ID,
                'X-NCP-APIGW-API-KEY': NAVER_MAP_API_KEY,
            },
            withCredentials: true,
        })
        .then(res => {
            let address = '';
            if (res.data.results[0].region) {
                address += res.data.results[0].region.area2.name + ' ';
                address += res.data.results[0].region.area3.name + ' ';
                address += res.data.results[0].region.area4.name + ' ';
            }
            if (res.data.results[0].land.name) {
                address += res.data.results[0].land.name + ' ';
            }
            if (res.data.results[0].land.number1) {
                address += res.data.results[0].land.number1;
            }
            if (res.data.results[0].land.number2) {
                address += '-' + res.data.results[0].land.number2;
            }
            return address;
        })
        .catch(error => {
            console.log(error);
            return '';
        });
};
