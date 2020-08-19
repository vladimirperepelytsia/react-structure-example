import { defineMessages } from 'react-intl';
import { LAZY as idPrefix } from '../../constants/translates';

const messages = defineMessages({
  page: {
    id: `${idPrefix}.page`,
    defaultMessage: 'lazy page'
  },
  search: {
    id: `${idPrefix}.search`,
    defaultMessage: 'Search'
  }
});

export default messages;
