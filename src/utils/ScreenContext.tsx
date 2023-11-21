import React, {createContext, useContext, useState} from 'react';
import {ScreenContextType} from '../interfaces/NavigationBar';
import {ScreenProviderProps} from '../interfaces/NavigationBar';

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

export function ScreenProvider({children}: ScreenProviderProps) {
  const [screen, setScreen] = useState<string>('Home');

  return (
    <ScreenContext.Provider value={{screen, setScreen}}>
      {children}
    </ScreenContext.Provider>
  );
}

export function useScreen() {
  const context = useContext(ScreenContext);
  if (!context) {
    throw new Error('ScreenProvider 내부에서 사용!');
  }
  return context;
}
