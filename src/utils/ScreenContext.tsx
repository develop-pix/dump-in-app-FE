import { createContext, useContext, useState } from 'react';

import { ScreenContextType, ScreenProviderProps } from 'interfaces/ScreenContext.interface';

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

export function ScreenProvider({ children }: ScreenProviderProps) {
    const [screen, setScreen] = useState('Home');

    return <ScreenContext.Provider value={{ screen, setScreen }}>{children}</ScreenContext.Provider>;
}

export function useScreen() {
    const context = useContext(ScreenContext);
    if (!context) {
        throw new Error('ScreenProvider 내부에서 사용!');
    }
    return context;
}
