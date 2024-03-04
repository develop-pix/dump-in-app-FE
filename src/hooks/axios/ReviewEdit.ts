import axios from 'axios';
import Config from 'react-native-config';

export const UploadEditReview = async (
    accessToken: string,
    reviewID: number,
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
        method: 'put',
        url: `${Config.BACKEND_API_URL}/reviews/${reviewID}`,
        headers: {
            Authorization:
                `Bearer ${accessToken}`,
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
