import React, {createContext, useState, Dispatch, SetStateAction} from 'react';
import {DEFAULT_ICON_SIZE} from '../constants';

interface ContextType {
  selectedIcon: string;
  setSelectedIcon: Dispatch<SetStateAction<string>>;
  iconColor: string;
  setIconColor: Dispatch<SetStateAction<string>>;
  iconSize: number;
  setIconSize: Dispatch<SetStateAction<number>>;
  backgroundColor: string;
  setBackgroundColor: Dispatch<SetStateAction<string>>;
  backgroundImage: string;
  setBackgroundImage: Dispatch<SetStateAction<string>>;
}

export const Context = createContext<ContextType>({
  selectedIcon: 'rocket',
  setSelectedIcon: () => {},
  iconColor: '',
  setIconColor: () => {},
  iconSize: DEFAULT_ICON_SIZE,
  setIconSize: () => {},
  backgroundColor: '',
  setBackgroundColor: () => {},
  backgroundImage: '',
  setBackgroundImage: () => {},
});

export const ContextProvider = ({children}: {children: React.ReactNode}) => {
  const [selectedIcon, setSelectedIcon] = useState<string>('rocket');
  const [iconColor, setIconColor] = useState<string>('');
  const [iconSize, setIconSize] = useState<number>(DEFAULT_ICON_SIZE);
  const [backgroundColor, setBackgroundColor] = useState<string>('');
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  return (
    <Context.Provider
      value={{
        selectedIcon,
        setSelectedIcon,
        iconColor,
        setIconColor,
        iconSize,
        setIconSize,
        backgroundColor,
        setBackgroundColor,
        backgroundImage,
        setBackgroundImage,
      }}>
      {children}
    </Context.Provider>
  );
};
