import { RouteProp } from '@react-navigation/native';

import { RootStackParam } from './NavigationBar';

export type PhotoBoothDetailRouteProp = RouteProp<RootStackParam, 'PhotoBoothDetail'>;

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
    eventID: number;
    representativeImage: string;
    eventTitle: string;
    startDate: string;
    endDate: string;
    myEvent: boolean;
}

export interface MoreEventModalProps {
    visible: boolean;
    onClose: () => void;
    eventData: EventDataType[];
}
