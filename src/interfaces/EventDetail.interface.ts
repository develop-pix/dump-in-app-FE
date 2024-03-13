import { ConceptData } from './redux/Store.interface';

export interface EventData {
    id: number | undefined;
    title: string;
    content: string;
    mainThumbnailImageUrl: string;
    startDate: string;
    endDate: string;
    isLiked: boolean;
    hashtag: ConceptData[];
    image: ImageData[];
}

interface ImageData {
    id: number;
    imageUrl: string;
}

export interface EventImageTitleProps {
    mainThumbnailImageUrl: string;
    title: string;
    hashtag: ConceptData[];
    isLiked: boolean;
}

export interface EventInfoProps {
    title: string;
    content: string;
    startDate: string;
    endDate: string;
}

export interface EventFrameProps {
    image: ImageData[];
}
