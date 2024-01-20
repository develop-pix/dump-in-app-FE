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
        descriptionTitle: string;
        description: string;
        startDate: string;
        endDate: string;
    };
}

export interface EventFrameProps {
    eventData: {
        frameImage: string[];
    };
}
