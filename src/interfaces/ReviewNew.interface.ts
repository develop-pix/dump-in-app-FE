export interface InputData {
    InputName: string;
    height: number;
}

export interface ImageFileInputProps {
    representativeImage: string | null | undefined;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    errorData: InputData[];
}

export interface ReviewDescriptionProps {
    description: string | null;
    errorData: InputData[];
}

export interface LocationInputProps {
    location: number | null | undefined;
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
}
