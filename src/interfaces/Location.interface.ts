export interface MapInputProps {
    location: string;
}

export interface SearchBranchListProps {
    data: BranchData[];
}

export interface BranchData {
    branchID: number;
    branchName: string;
    distance: string;
    address: string;
}

export interface BranchListProps {
    branchName: string;
    distance: string;
    branchID: number;
}

export interface LocationData {
    latitude: number;
    longitude: number;
}

export interface BranchLocationData {
    branchLocation: LocationData[];
}

export interface ResetLocationButtonProps {
    GetAuthorization: () => Promise<'disabled' | 'granted' | 'denied' | 'restricted' | 'never_ask_again' | undefined>;
    GetLocation: () => number;
    setZoom: React.Dispatch<React.SetStateAction<number>>;
}

export interface BranchCardData {
    branchID: string;
    branchName: string;
    latitude: number;
    longitude: number;
    isLiked: boolean;
    distance: string;
    photoBoothBrand: BranchCardPhotoBoothData;
}

interface BranchCardPhotoBoothData {
    photoBoothName: string;
    logoImageURL: string;
    hashtag: HashtagData[];
}

export interface HashtagData {
    hashtagID: number;
    name: string;
}

export interface BranchCarouselProps {
    branchData: BranchCardData[];
}

export interface BranchCardProps {
    branchID: string;
    imageLogo: string;
    photoBoothName: string;
    branchName: string;
    hashtag: HashtagData[];
    myBranch: boolean;
    distance: string;
}
