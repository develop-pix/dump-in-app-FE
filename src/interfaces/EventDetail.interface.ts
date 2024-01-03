import { RouteProp } from '@react-navigation/native';

import { RootStackParam } from './NavigationBar';

export type EventDetailRouteProp = RouteProp<RootStackParam, 'EventDetail'>;

export interface EventImageTitleProps {
    eventData: {
        representativeImage: string;
        eventTitle: string;
        hashtag: string[];
        myEvent: boolean;
    };
}

export interface EventInfoProps {
    eventData: {
        desciptionTitle: string;
        desciption: string;
        startDate: string;
        endDate: string;
    };
}

export interface EventFrameProps {
    eventData: {
        frameImage: string[];
    };
}
