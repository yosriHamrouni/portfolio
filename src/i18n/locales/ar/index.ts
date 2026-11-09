import type { Locale } from '../../types';
import { content } from './content';
import { ui } from './ui';

// No Arabic CV exists: French first (the working language of Tunisian recruiters), then English.
const locale: Locale = { ui, content, cvOrder: ['fr', 'en'] };
export default locale;
