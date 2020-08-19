import { defineMessages } from 'react-intl';
import { MEMO as idPrefix } from '../../constants/translates';

const messages = defineMessages({
  page: {
    id: `${idPrefix}.page`,
    defaultMessage: 'memo page'
  },
  title: {
    id: `${idPrefix}.title`,
    defaultMessage: 'Title:'
  },
  production: {
    id: `${idPrefix}.production`,
    defaultMessage: 'Production:'
  },
  like: {
    id: `${idPrefix}.like`,
    defaultMessage: 'Like'
  },
  likes: {
    id: `${idPrefix}.likes`,
    defaultMessage: 'Likes:'
  },
});

export default messages;
