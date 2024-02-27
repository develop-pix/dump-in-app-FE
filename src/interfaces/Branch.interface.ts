export interface BranchData {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    streetAddress: string;
    roadAddress: string;
    operationTime: string;
    isLiked: boolean;
    photoBoothBrand: PhotoBoothBrandData;
    distance: string;
}

interface PhotoBoothBrandData {
    name: string;
    image: PhotoBoothImageData[];
    hashtag: BranchHashtagData[];
}

interface PhotoBoothImageData {
    id: number;
    imageUrl: string;
}

interface BranchHashtagData {
    id: number;
    name: string;
}

//TODO:Branch.tsx 에서 사용 check
export interface ReviewData {
    id: number;
    mainThumbnailImageUrl: string;
    content: string;
    frameColor: string;
    participants: number;
    cameraShot: string;
    goodsAmount: boolean;
    curlAmount: boolean;
    concept: ConceptData[];
}

interface ConceptData {
    hashtagID: number;
    name: string;
}

export interface BranchLocationProps {
    latitude: number;
    longitude: number;
    distance: string | undefined;
}

export interface BranchInfoProps {
    photoBoothName: string;
    branchName: string;
    branchHashtag: BranchHashtagData[];
    loadAddress: string;
    streetAddress: string;
    operationTime: string;
    isLiked: boolean;
}

export interface BranchTitleProps {
    photoBoothName: string;
    branchName: string;
    branchID: string | null;
    branchHashtag: BranchHashtagData[];
    isLiked: boolean;
}

export interface BranchDescriptionProps {
    loadAddress: string;
    streetAddress: string;
    open: string;
}

export interface Geolocation {
    latitude: number;
    longitude: number;
}

export interface BranchDistanceProps {
    distance: string | undefined;
}
