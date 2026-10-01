import { localized } from './locale.js';
import * as mk from './mk/pagination.js';
import * as tr from './tr/pagination.js';

export const paginationStringFunctions = localized({
  mk: mk.paginationStringFunctions,
  tr: tr.paginationStringFunctions,
});
