export interface InputDatas {
  InputName: string;
  height: number;
}

export interface ImageFileInputProps {
  representaiveImage: string | null | undefined;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  errorData: InputDatas[];
}

export interface ReviewDescriptionProps {
  description: string | null;
  errorData: InputDatas[];
}

export interface LocationInputProps {
  location: number | null | undefined;
  errorData: InputDatas[];
}

export interface DateInputProps {
  date: Date | null;
  errorData: InputDatas[];
}

export interface FrameColorSelectProps {
  frameColor: string | null;
  errorData: InputDatas[];
}

export interface PartySelectProps {
  party: number | null;
  errorData: InputDatas[];
}

export interface cameraShotSelectProps {
  cameraShot: string | null;
  errorData: InputDatas[];
}

export interface HashtagSelectProps {
  hashtags: string[];
  errorData: InputDatas[];
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
