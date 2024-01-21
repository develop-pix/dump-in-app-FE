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

    // S3경로 및 secretKey Setting
    const S3Data = {
        bucketName: Config.S3_BUCKET_NAME,
        region: 'ap-northeast-2',
        accessKeyID: Config.S3_ACCESSKEY_ID,
        secretAccessKey: Config.S3_SECRET_ACCESSKEY,
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

    // myBucket.putObject(param).send();
    try {
        await myBucket.putObject(param).promise();
        const objectUrl = `https://s3.${S3Data.region}.amazonaws.com/${S3Data.bucketName}/${param.Key}`;
        return objectUrl;
    } catch (error) {
        console.error('Error uploading file:', error);
    }
};

/**
 * Test
 * photoBoothId: 994ef416-92fa-46f3-b0be-eb8c1445a506
 * AccessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyNTY3Njc0NjY2LCJpYXQiOjE3MDM3NjEwNjYsImp0aSI6ImQzYzdkMGY4Y2NlMzQ1NmJiYWRmZTViMDRmYTBhNjdiIiwidXNlcl9pZCI6MTN9.WF9ak0lHvvOBxT8jZ2hqb5nXtI-9IHtkbdh4TnBeQ2k

 * */
export const UploadNewReview = async (
    mainThumbnailImageUrl: string | undefined,
    imageUrls: string[],
    content: string | null,
    photoBoothId: string | null | undefined,
    date: Date | null,
    frameColor: string | null,
    participants: number | null,
    cameraShot: string | null,
    concept: string[],
    goodsAmount: boolean | null,
    curlAmount: boolean | null,
    isPublic: boolean,
) => {
    console.log('mainThumbnailImageUrl');
    console.log(mainThumbnailImageUrl);
    console.log('imageUrls');
    console.log(imageUrls);
    console.log('content');
    console.log(content);
    console.log('photoBoothId');
    console.log(photoBoothId);
    console.log('date');
    console.log(date);
    console.log('frameColor');
    console.log(frameColor);
    console.log('participants');
    console.log(participants);
    console.log('cameraShot');
    console.log(cameraShot);
    console.log('concept');
    console.log(concept);
    console.log('goodsAmount');
    console.log(goodsAmount);
    console.log('curlAmount');
    console.log(curlAmount);
    console.log('isPublic');
    console.log(isPublic);

    return await axios({
        method: 'post',
        url: `${Config.BACKEND_API_URL}/reviews/`,
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyNTY3Njc0NjY2LCJpYXQiOjE3MDM3NjEwNjYsImp0aSI6ImQzYzdkMGY4Y2NlMzQ1NmJiYWRmZTViMDRmYTBhNjdiIiwidXNlcl9pZCI6MTN9.WF9ak0lHvvOBxT8jZ2hqb5nXtI-9IHtkbdh4TnBeQ2k',
        },
        data: {
            mainThumbnailImageUrl,
            imageUrls,
            content,
            photoBoothId,
            date: '2024-01-19',
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
