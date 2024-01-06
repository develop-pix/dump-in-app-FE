import { S3_ACCESSKEY_ID, S3_BUCKET_NAME, S3_SECRET_ACCESSKEY } from '@env';
import AWS, { config } from 'aws-sdk';

export const UploadImageToS3 = async (representativeImage: string, representativeImageName: string) => {
    const photo = {
        uri: representativeImage,
        type: 'image/jpeg',
        name: representativeImageName,
    };

    // S3경로 및 secretKey Setting
    const S3Data = {
        bucketName: S3_BUCKET_NAME,
        region: 'ap-northeast-2',
        accessKeyID: S3_ACCESSKEY_ID,
        secretAccessKey: S3_SECRET_ACCESSKEY,
    };

    // AWS Config
    config.update({
        accessKeyId: S3Data.accessKeyID,
        secretAccessKey: S3Data.secretAccessKey,
    });

    const myBucket = new AWS.S3({
        params: { Bucket: S3Data.bucketName },
        region: S3Data.region,
    });

    // URL로 사진 데이터 Get
    const GetFileFromPath = async () => {
        const result = await fetch(photo.uri);
        return await result.blob();
    };

    const file = await GetFileFromPath();

    // Key는 경로, 파일 이름인데 중복 이름일경우 덮어씌우기가 되므로 유니크한 아이디가 필요함. 임시로 날짜를 추가해서 저장
    const param = {
        ContentType: photo.type,
        Body: file,
        Bucket: S3Data.bucketName,
        Key: 'reviews/test/' + Date.now() + '-' + photo.name,
    };

    myBucket.putObject(param).send();
};
