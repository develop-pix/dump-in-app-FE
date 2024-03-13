import { axiosInstance } from './ApiHeader';

export const UploadEditReview = async (
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
    return await axiosInstance({
        method: 'put',
        url: `/reviews/${reviewID}`,
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
