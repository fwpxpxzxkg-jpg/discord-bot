/* eslint-disable camelcase -- Discord API payloads use snake_case */
import {
  Locale,
  type RESTPostAPIApplicationCommandsJSONBody,
} from 'discord.js';

import {
  commandDescriptions,
  commandGroupDescriptions,
  commandOptionDescriptions,
} from '@/translations/tr/commands.js';

type DescriptionLocalizations = Partial<Record<Locale, null | string>>;

// Commands, subcommands and options all share this shape.
type LocalizableNode = {
  description_localizations?: DescriptionLocalizations | null;
  name: string;
  options?: LocalizableNode[];
};

// Discord shows these to users based on their client language. The base
// descriptions stay Macedonian, as Discord has no Macedonian locale. Keys are
// full command names, optionally followed by an option name.
const descriptionLocalizations: Partial<
  Record<Locale, Record<string, string>>
> = {
  [Locale.Turkish]: {
    ...commandGroupDescriptions,
    ...commandDescriptions,
    ...commandOptionDescriptions,
  },
};

const getDescriptionLocalizations = (key: string) => {
  const localizations: DescriptionLocalizations = {};

  for (const [locale, descriptions] of Object.entries(
    descriptionLocalizations,
  )) {
    const description = descriptions[key];

    if (description !== undefined) {
      localizations[locale as Locale] = description;
    }
  }

  return localizations;
};

const localizeNode = (node: LocalizableNode, key: string) => {
  const localizations = getDescriptionLocalizations(key);

  if (Object.keys(localizations).length > 0) {
    node.description_localizations = {
      ...node.description_localizations,
      ...localizations,
    };
  }

  const options = node.options ?? [];

  for (const option of options) {
    localizeNode(option, `${key} ${option.name}`);
  }
};

export const localizeCommand = <
  T extends RESTPostAPIApplicationCommandsJSONBody,
>(
  command: T,
): T => {
  // Context menu commands have no description to localize.
  if ('description' in command) {
    localizeNode(command as LocalizableNode, command.name);
  }

  return command;
};
