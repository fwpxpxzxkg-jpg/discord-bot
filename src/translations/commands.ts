import { localized } from './locale.js';
import * as mk from './mk/commands.js';
import * as tr from './tr/commands.js';

export const commandDescriptions = localized({
  mk: mk.commandDescriptions,
  tr: tr.commandDescriptions,
});

export const commandResponses = localized({
  mk: mk.commandResponses,
  tr: tr.commandResponses,
});

export const commandResponseFunctions = localized({
  mk: mk.commandResponseFunctions,
  tr: tr.commandResponseFunctions,
});

export const commandErrors = localized({
  mk: mk.commandErrors,
  tr: tr.commandErrors,
});

export const commandErrorFunctions = localized({
  mk: mk.commandErrorFunctions,
  tr: tr.commandErrorFunctions,
});
