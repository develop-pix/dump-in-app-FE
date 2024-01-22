export interface InputData {
    InputName: string;
    height: number;
}

export interface ImageFileInputProps {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    errorData: InputData[];
    setLimitImage: React.Dispatch<React.SetStateAction<number>>;
}

export interface ReviewDescriptionProps {
    description: string | null;
    errorData: InputData[];
}

export interface LocationInputProps {
    errorData: InputData[];
}

export interface DateInputProps {
    date: Date | null;
    errorData: InputData[];
}

export interface FrameColorSelectProps {
    frameColor: string | null;
    errorData: InputData[];
}

export interface PartySelectProps {
    party: number | null;
    errorData: InputData[];
}

export interface cameraShotSelectProps {
    cameraShot: string | null;
    errorData: InputData[];
}

export interface HashtagSelectProps {
    hashtags: string[];
    errorData: InputData[];
}

export interface ToolsSelectProps {
    tools: boolean | null;
}

export interface HairIronSelectProps {
    hairIron: boolean | null;
}

export interface PublicOpenSwitchProps {
    publicOpen: boolean;
}

export interface ReviewNewModalProps {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    limitImage: number;
    setLimitImage: React.Dispatch<React.SetStateAction<number>>;
}

export interface ImageData {
    imageName: string | undefined;
    imageURL: string | undefined;
}
