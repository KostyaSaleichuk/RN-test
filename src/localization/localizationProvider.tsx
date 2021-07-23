import React from 'react';

import {LocalizationContext} from './localizationContext';
import {Languages} from './localization';

interface LocalizationProviderProps {
  value: {
    language: Languages;
    setLanguage: (language: Languages) => void;
  };
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> =
  props => {
    return (
      <LocalizationContext.Provider value={props.value}>
        {props.children}
      </LocalizationContext.Provider>
    );
  };
