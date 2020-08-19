import { defineMessages } from 'react-intl';
import { PAGE as idPrefix } from '../../constants/translates';

const messages = defineMessages({
  welcome: {
    id: `${idPrefix}.welcome`,
    defaultMessage: 'Try to build something great'
  },
  home: {
    id: `${idPrefix}.home`,
    defaultMessage: 'Home'
  },
  about: {
    id: `${idPrefix}.about`,
    defaultMessage: 'About'
  },
  lazy: {
    id: `${idPrefix}.lazy`,
    defaultMessage: 'Lazy'
  },
  memo: {
    id: `${idPrefix}.memo`,
    defaultMessage: 'Memo'
  },
  context: {
    id: `${idPrefix}.context`,
    defaultMessage: 'Context'
  }
});

export default messages;
