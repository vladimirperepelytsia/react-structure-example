import { addLocaleData } from 'react-intl';
import intlEN from 'react-intl/locale-data/en';
import intlRU from 'react-intl/locale-data/ru';
import ru from './ru';

addLocaleData(
  [
    ...intlEN,
    ...intlRU
  ]
);

export default {
  locale: 'en',
  messages: {
    en: {},
    ru
  }
};
