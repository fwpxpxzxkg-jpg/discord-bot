import { localized } from './locale.js';
import * as mk from './mk/tickets.js';
import * as tr from './tr/tickets.js';

export const ticketMessages = localized({
  mk: mk.ticketMessages,
  tr: tr.ticketMessages,
});

export const ticketMessageFunctions = localized({
  mk: mk.ticketMessageFunctions,
  tr: tr.ticketMessageFunctions,
});
