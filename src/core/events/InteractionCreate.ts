import { type ClientEvents, Events, type Interaction } from 'discord.js';

import { logger } from '@/common/logger/index.js';
import { getGuildLocale } from '@/configuration/bot/index.js';
import { runWithLocale } from '@/translations/locale.js';

import { handleAutocomplete } from '../commands/autocompleteHandler.js';
import {
  handleButton,
  handleModalSubmit,
} from '../commands/componentHandlers.js';
import {
  handleMessageContextMenuCommand,
  handleUserContextMenuCommand,
} from '../commands/contextMenuHandlers.js';
import { handleChatInputCommand } from '../commands/handlers.js';

export const name = Events.InteractionCreate;

const handleInteraction = async (interaction: Interaction) => {
  if (interaction.isChatInputCommand()) {
    await handleChatInputCommand(interaction);
  } else if (interaction.isButton()) {
    await handleButton(interaction);
  } else if (interaction.isUserContextMenuCommand()) {
    await handleUserContextMenuCommand(interaction);
  } else if (interaction.isMessageContextMenuCommand()) {
    await handleMessageContextMenuCommand(interaction);
  } else if (interaction.isAutocomplete()) {
    await handleAutocomplete(interaction);
  } else if (interaction.isModalSubmit()) {
    await handleModalSubmit(interaction);
  } else {
    logger.warn(`Unknown interaction from ${interaction.user.id}`, {
      guildId: interaction.guild?.id,
    });
  }
};

export const execute = async (...[interaction]: ClientEvents[typeof name]) => {
  const locale = await getGuildLocale(interaction.guildId);

  await runWithLocale(locale, () => handleInteraction(interaction));
};
