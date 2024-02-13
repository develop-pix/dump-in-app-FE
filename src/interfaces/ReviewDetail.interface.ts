export interface ReviewData {
    id: number | null;
    image: ImageData[];
    concept: ConceptData[];
    isMine: boolean;
    isLiked: boolean;
    userNickname: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    content: string | null;
    mainThumbnailImageUrl: string | null;
    date: string | null;
    frameColor: string | null;
    participants: number;
    cameraShot: string | null;
    goodsAmount: boolean | null;
    curlAmount: boolean | null;
    isPublic: boolean;
    viewCount: number;
    likeCount: number;
    photoBoothId: string | null;
}

export interface ReviewDescriptionProps {
    date: string | null;
    content: string | null;
    concept: ConceptData[];
    isLiked: boolean;
}

export interface ReviewManageModalProps {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    reviewID: number;
}

interface ImageData {
    id: number;
    imageUrl: string;
}

interface ConceptData {
    hashtagID: number;
    name: string;
}
