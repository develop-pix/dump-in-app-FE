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
