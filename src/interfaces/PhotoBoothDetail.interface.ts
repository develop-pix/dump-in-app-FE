import { PhotoBoothImageData } from './reuse/official-image/OfficialImage.interface';
import { ConceptData } from './reuse/photo-dump/PhotoDump.interface';

export interface PhotoBoothDataType {
    id: number | undefined;
    name: string;
    hashtag: ConceptData[];
    image: PhotoBoothImageData[];
}

export interface PhotoBoothImageTitleProps {
    photoBoothData: PhotoBoothDataType;
}

export interface PhotoBoothEventProps {
    eventData: EventDataType[];
}
export type PhotoBoothEventFrameProps = {
    event: EventDataType;
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
    visible: boolean;
    onClose: () => void;
    eventData: EventDataType[];
}
