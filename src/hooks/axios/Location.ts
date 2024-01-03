import axios from 'axios';

export const getAddressFromNaverGeocoding = async (latitude: number, longitude: number) => {
    //소수점 7자리 명시
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
                //배포 및 깃허브에 ID와 Secret key가 드러나면 안됨 -> 나중에 env 파일로 수정
                'X-NCP-APIGW-API-KEY-ID': 'sc9favxy2w',
                'X-NCP-APIGW-API-KEY': '34Pab6RRd33rPCqGq4lcXcrkUKE7ogsx9nlAzFfo',
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
