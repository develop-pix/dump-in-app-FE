import { PhotoBoothImageData } from './reuse/official-image/OfficialImage.interface';
import { ConceptData } from './reuse/photo-dump/PhotoDump.interface';

export interface PhotoBoothDataType {
    id: number | undefined;
    name: string;
    hashtag: ConceptData[];
    image: PhotoBoothImageData[];
    mainThumbnailImageUrl: string;
}

export interface PhotoBoothImageTitleProps {
    photoBoothData: PhotoBoothDataType;
}

export interface PhotoBoothEventProps {
    dataLimit: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    eventData: EventDataType[];
}
export type PhotoBoothEventFrameProps = {
    event: EventDataType;
    onClose?: () => void;
};

export interface EventDataType {
    id: number;
    mainThumbnailImageUrl: string;
    title: string;
    startDate: string;
    endDate: string;
    isLiked: boolean;
}

export interface MoreEventModalProps {
    dataLimit: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    visible: boolean;
    onClose: () => void;
}
