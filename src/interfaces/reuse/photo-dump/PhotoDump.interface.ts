export interface PhotoDumpProps {
    photoBoothName: string;
    reviewData: ReviewData[];
}

interface ReviewData {
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

export interface ConceptData {
    id: number;
    name: string;
}
