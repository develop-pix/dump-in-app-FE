import { ReactNode } from 'react';

export type ScreenContextType = {
    screen: string;
    setScreen: React.Dispatch<React.SetStateAction<string>>;
};

export interface ScreenProviderProps {
    children: ReactNode;
}
