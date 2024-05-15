import { MutableRefObject } from 'react';
import { ScrollView } from 'react-native';

export interface InputData {
    InputName: string;
    height: number;
}

export interface ReviewSubmitButtonProps {
    errorData: InputData[];
    setErrorData: React.Dispatch<React.SetStateAction<InputData[]>>;
    scrollRef: MutableRefObject<ScrollView | null>;
}

export interface ImageFileInputProps {
    setOpenImageModal: React.Dispatch<React.SetStateAction<boolean>>;
    errorData: InputData[];
    setLimitImage: React.Dispatch<React.SetStateAction<number>>;
    scrollRef: MutableRefObject<ScrollView | null>;
}

export interface ReviewDescriptionProps {
    errorData: InputData[];
}

export interface LocationInputProps {
    errorData: InputData[];
}

export interface DateInputProps {
    errorData: InputData[];
}

export interface FrameColorSelectProps {
    errorData: InputData[];
}

export interface PartySelectProps {
    errorData: InputData[];
}

export interface CameraShotSelectProps {
    errorData: InputData[];
}

export interface HashtagSelectProps {
    errorData: InputData[];
}

export interface ReviewModalProps {
    openImageModal: boolean;
    setOpenImageModal: React.Dispatch<React.SetStateAction<boolean>>;
    limitImage: number;
    setLimitImage: React.Dispatch<React.SetStateAction<number>>;
}

export interface ImageData {
    imageName: string | undefined;
    imageURL: string | undefined;
}
