import en from '..//messages/en.json';
import ja from '..//messages/ja.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const messagesByLocale: Record<string, any> = { en, ja };

const nextIntl = {
  defaultLocale: 'en',
  messagesByLocale,
};

export default nextIntl;
