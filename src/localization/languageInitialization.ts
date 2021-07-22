import {localization} from './localization';
import {Languages} from './languages';
import en from './translations/en.json';
import ua from './translations/ua.json';
import ru from './translations/ru.json';

class LanguageInitialization {
  InitLanguage = (language: Languages) =>
    localization.initialization({
      resources: {en, ua, ru},
      lng: language || Languages.english,
      keySeparator: false,
      interpolation: {escapeValue: false},
    });
}

export const languageInitialization = new LanguageInitialization();
