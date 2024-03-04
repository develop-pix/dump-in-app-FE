export interface PhotoBoothDataType {
    photoBoothName: string;
    hashtag: string[];
    representativeImage: string;
    officialImage: string[];
    event: {
        eventID: number;
        representativeImage: string;
        eventTitle: string;
        startDate: string;
        endDate: string;
        myEvent: boolean;
    }[];
    review: {
        reviewID: number;
        representativeImage: string;
        description: string;
        hashtag: string[];
    }[];
}

export interface PhotoBoothImageTitleProps {
    photoBoothData: {
        representativeImage: string;
        photoBoothName: string;
        hashtag: string[];
    };
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
