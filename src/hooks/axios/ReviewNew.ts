import AWS, { config } from 'aws-sdk';

export const UploadImageToS3 = async (representativeImage: string, representativeImageName: string) => {
    const photo = {
        uri: representativeImage,
        type: 'image/jpeg',
        name: representativeImageName,
    };

    //아래 S3Data 변수들은 추후 env로 이동
    const S3Data = {
        bucketName: 'api-dev.dump-in.co.kr',
        region: 'ap-northeast-2',
        accessKeyID: 'AKIA2MDWSFM6EEDYYNMZ',
        secretAccessKey: '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',
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

    //Key는 경로, 파일 이름인데 중복 이름일경우 덮어씌우기가 되므로 유니크한 아이디가 필요함. 임시로 날짜를 추가해서 저장
    const param = {
        ContentType: photo.type,
        Body: file,
        Bucket: S3Data.bucketName,
        Key: 'reviews/test/' + Date.now() + '-' + photo.name,
    };

    myBucket.putObject(param).send();
};
