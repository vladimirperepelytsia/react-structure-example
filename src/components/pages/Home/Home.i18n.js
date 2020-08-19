import { defineMessages } from 'react-intl';
import { HOME as idPrefix } from '../../constants/translates';

const messages = defineMessages({
  page: {
    id: `${idPrefix}.page`,
    defaultMessage: 'home page'
  },
  newJoke: {
    id: `${idPrefix}.newJoke`,
    defaultMessage: 'New joke'
  }
});

export default messages;
