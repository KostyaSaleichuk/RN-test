import {useContext} from 'react';

import {LocalizationContext} from './localizationContext';

export const useLocalization = () => useContext(LocalizationContext);
