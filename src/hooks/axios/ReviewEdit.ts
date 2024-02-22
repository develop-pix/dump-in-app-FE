import axios from 'axios';
import Config from 'react-native-config';

export const UploadEditReview = async (
    reviewID: number,
    mainThumbnailImageUrl: string | undefined,
    imageUrls: (string | undefined)[],
    content: string | null,
    photoBoothId: string | null | undefined,
    date: Date | string | null,
    frameColor: string | null,
    participants: number | null,
    cameraShot: string | null,
    concept: string[],
    goodsAmount: boolean | null,
    curlAmount: boolean | null,
    isPublic: boolean,
) => {
    return await axios({
        method: 'put',
        url: `${Config.BACKEND_API_URL}/reviews/${reviewID}`,
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyNTY3Njc0NjY2LCJpYXQiOjE3MDM3NjEwNjYsImp0aSI6ImQzYzdkMGY4Y2NlMzQ1NmJiYWRmZTViMDRmYTBhNjdiIiwidXNlcl9pZCI6MTN9.WF9ak0lHvvOBxT8jZ2hqb5nXtI-9IHtkbdh4TnBeQ2k',
        },
        data: {
            mainThumbnailImageUrl,
            imageUrls,
            content,
            photoBoothId,
            date: '2024-01-11', //TODO: Date 형식으로 입력받을수 있도록 수정될 예정 임시로 'yyyy-mm-dd' string으로 받도록 고정
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
