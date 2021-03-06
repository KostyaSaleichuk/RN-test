import React from 'react';

import {Languages} from './localization';

interface LocalizationContextProps {
  language: Languages;
  setLanguage: (language: Languages) => void;
}

export const LocalizationContext =
  React.createContext<LocalizationContextProps>({
    language: Languages.english,
    setLanguage: language => {},
  });
