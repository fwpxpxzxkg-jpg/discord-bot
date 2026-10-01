import { getLocale, localized } from './locale.js';
import * as mk from './mk/labels.js';
import * as tr from './tr/labels.js';

export const labels = localized({ mk: mk.labels, tr: tr.labels });

export const toolStatusLabels = localized({
  mk: mk.toolStatusLabels,
  tr: tr.toolStatusLabels,
});

const dateLocales = { mk: mk.dateLocale, tr: tr.dateLocale };

export const getDateLocale = () => dateLocales[getLocale()];
