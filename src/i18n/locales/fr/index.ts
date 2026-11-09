import type { Locale } from '../../types';
import { content } from './content';
import { ui } from './ui';

// Le CV français est proposé en premier.
const locale: Locale = { ui, content, cvOrder: ['fr', 'en'] };
export default locale;
