import { localized } from './locale.js';
import * as mk from './mk/components.js';
import * as tr from './tr/components.js';

export const componentMessages = localized({
  mk: mk.componentMessages,
  tr: tr.componentMessages,
});

export const componentMessageFunctions = localized({
  mk: mk.componentMessageFunctions,
  tr: tr.componentMessageFunctions,
});
