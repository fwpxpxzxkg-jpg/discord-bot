import { localized } from './locale.js';
import * as mk from './mk/about.js';
import * as tr from './tr/about.js';

export const aboutMessages = localized({
  mk: { aboutMessage: mk.aboutMessage, botName: mk.botName },
  tr: { aboutMessage: tr.aboutMessage, botName: tr.botName },
});
