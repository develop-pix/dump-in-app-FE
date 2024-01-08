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
    branchID: number;
    imageLogo: string;
    photoBoothName: string;
    branchName: string;
    hashtag: string[];
    myBranch: boolean;
    distance: number;
    elapsedTime: string;
}

export interface BranchCarouselProps {
    showNearBranch: boolean;
}

export interface BranchCardProps {
    branchID: number;
    imageLogo: string;
    photoBoothName: string;
    branchName: string;
    hashtag: string[];
    myBranch: boolean;
    distance: number;
    elapsedTime: string;
}
