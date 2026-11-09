import type { Locale } from '../../types';
import { content } from './content';
import { ui } from './ui';

const locale: Locale = { ui, content, cvOrder: ['en', 'fr'] };
export default locale;
