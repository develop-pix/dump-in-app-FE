export interface ReviewDataState {
    representativeImage: ImageData;
    image: ImageData[];
    enlargedImage: ImageData;
    description: string | null;
    branchID: string | undefined;
    date: Date | string | null;
    frameColor: string | null;
    party: number | null;
    cameraShot: string | null;
    concept: string[];
    tools: boolean | null;
    hairIron: boolean | null;
    publicOpen: boolean;
}

export interface ImageData {
    imageURL: string | undefined;
    imageName: string | undefined;
}

export interface AccessTokenState {
    token: string | null;
}

export interface AccessTokenExpireState {
    expire: Date | null;
}

export interface LocationState {
    latitude: number | null;
    longitude: number | null;
}

export interface UserDataState {
    userID: string | null;
    userNickName: string | null;
}

export interface ReviewDetailState {
    id: number | null;
    image: ReviewImageData[];
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

export interface ConceptData {
    hashtagID: number;
    name: string;
}

export interface ReviewImageData {
    id: number;
    imageUrl: string;
}
