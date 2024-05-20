import { ConceptData } from './redux/Store.interface';

export interface MapInputProps {
    location: string;
}

export interface SearchBranchListProps {
    search: string;
    resultData: BranchData[];
    setResultData: React.Dispatch<React.SetStateAction<BranchData[]>>;
}

export interface BranchData {
    id: string;
    name: string;
    distance: string | null;
}

export interface BranchListProps {
    branchName: string;
    distance: string | null;
    branchID: string;
}

export interface LocationData {
    latitude: number;
    longitude: number;
}

export interface BranchLocationData {
    branchLocation: LocationData[];
}

export interface ResetLocationButtonProps {
    getCurrentLocation: () => number;
    setMyPosition: React.Dispatch<React.SetStateAction<LocationData>>;
    setZoom: React.Dispatch<React.SetStateAction<number>>;
}

export interface BranchCardData {
    id: string;
    location: string;
    latitude: number;
    longitude: number;
    isLiked: boolean;
    distance: string;
    photoBoothBrand: BranchCardPhotoBoothData;
}

interface BranchCardPhotoBoothData {
    name: string;
    logoImageURL: string;
    hashtag: ConceptData[];
}

export interface BranchCarouselProps {
    branchData: BranchCardData[];
}

export interface BranchCardProps {
    id: string;
    imageLogo: string;
    photoBoothName: string;
    location: string;
    hashtag: ConceptData[];
    isLiked: boolean;
    distance: string;
    branchLatitude: number;
    branchLongitude: number;
}
