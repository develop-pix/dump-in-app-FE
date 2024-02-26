import AWS, { config } from 'aws-sdk';
import axios from 'axios';
import Config from 'react-native-config';

//TODO: Key를 수정하여 UserID로 된 폴더가 생성되도록 수정해야함
export const UploadImageToS3 = async (imageURL: string, ImageName: string) => {
    const photo = {
        uri: imageURL,
        type: 'image/jpeg',
        name: ImageName,
    };

    /** S3경로 및 secretKey Setting */
    const S3Data = {
        bucketName: Config.S3_BUCKET_NAME,
        region: 'ap-northeast-2',
        accessKeyID: Config.S3_ACCESSKEY_ID,
        secretAccessKey: Config.S3_SECRET_ACCESSKEY,
    };

    /** AWS Config */
    config.update({
        accessKeyId: S3Data.accessKeyID,
        secretAccessKey: S3Data.secretAccessKey,
    });

    const myBucket = new AWS.S3({
        params: { Bucket: S3Data.bucketName },
        region: S3Data.region,
    });

    /** URL로 사진 데이터 Get */
    const GetFileFromPath = async () => {
        const result = await fetch(photo.uri);
        return await result.blob();
    };

    const file = await GetFileFromPath();

    //FIXME: Key는 경로, 파일 이름인데 중복 이름일경우 덮어씌우기가 되므로 유니크한 아이디가 필요함. 임시로 날짜를 추가해서 저장
    const param = {
        ContentType: photo.type,
        Body: file,
        Bucket: S3Data.bucketName,
        Key: 'reviews/test/' + Date.now() + '-' + photo.name,
    };

    try {
        await myBucket.putObject(param).promise();
        const objectUrl = `https://s3.${S3Data.region}.amazonaws.com/${S3Data.bucketName}/${param.Key}`;
        return objectUrl;
    } catch (error) {
        console.error('Error uploading file:', error);
    }
};

export const UploadNewReview = async (
    accessToken: string,
    mainThumbnailImageUrl: string | undefined,
    imageUrls: (string | undefined)[],
    content: string | null,
    photoBoothId: string | null | undefined,
    date: string | null,
    frameColor: string | null,
    participants: number | null,
    cameraShot: string | null,
    concept: string[],
    goodsAmount: boolean | null,
    curlAmount: boolean | null,
    isPublic: boolean,
) => {
    return await axios({
        method: 'post',
        url: `${Config.BACKEND_API_URL}/reviews/`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        data: {
            mainThumbnailImageUrl,
            imageUrls,
            content,
            photoBoothId,
            date,
            frameColor,
            participants,
            cameraShot,
            concept,
            goodsAmount,
            curlAmount,
            isPublic,
        },
    })
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.log(error);
        });
};
