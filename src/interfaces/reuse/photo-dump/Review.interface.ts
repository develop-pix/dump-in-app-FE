export interface ReviewProps {
    reviewItem: ReviewData;
}

export interface ReviewData {
    id: number;
    mainThumbnailImageUrl: string;
    content: string;
    frameColor: string;
    cameraShot: string;
    participants: number;
    goodsAmount: boolean;
    curlAmount: boolean;
    concept: ConceptData[];
}

interface ConceptData {
    hashtagID: number;
    name: string;
}
