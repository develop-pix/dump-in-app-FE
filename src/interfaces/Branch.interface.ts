export interface BranchData {
    id: string;
    name: string;
    latitude: number | null;
    longitude: number | null;
    streetAddress: string;
    roadAddress: string;
    operationTime: string;
    isLiked: boolean;
    photoBoothBrand: PhotoBoothBrandData;
    distance: string | null;
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
    id: number;
    name: string;
}

export interface BranchLocationProps {
    latitude: number | null;
    longitude: number | null;
    distance: string | null;
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
    distance: string | null;
}
