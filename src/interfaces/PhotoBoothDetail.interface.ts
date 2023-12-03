export interface PhotoBoothImageTitleProps {
  photoboothData: {
    representativeImage: string;
    photoboothName: string;
    hashtag: string[];
    myPhotobooth: boolean;
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
