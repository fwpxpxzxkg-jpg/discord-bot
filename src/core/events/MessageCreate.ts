import { type ClientEvents, Events, type Message } from 'discord.js';

import { logger } from '@/common/logger/index.js';
import {
  getCrosspostingProperty,
  getGuildLocale,
} from '@/configuration/bot/index.js';
import { handleChatMessage } from '@/modules/chat/utils/reply.js';
import { handleTicketMessage } from '@/modules/ticket/utils/tickets.js';
import { runWithLocale } from '@/translations/locale.js';

export const name = Events.MessageCreate;

const crosspost = async (message: Message) => {
  if (message.guild === null) {
    return;
  }

  const crosspostingEnabled = await getCrosspostingProperty(
    'enabled',
    message.guild.id,
  );
  const crosspostingChannels = await getCrosspostingProperty(
    'channels',
    message.guild.id,
  );

  if (
    !crosspostingEnabled ||
    crosspostingChannels?.length === 0 ||
    !crosspostingChannels?.includes(message.channel.id)
  ) {
    return;
  }

  try {
    await message.crosspost();
  } catch (error) {
    logger.error(
      `Failed crossposting message in channel ${message.channel.id}\n${String(error)}`,
      {
        guildId: message.guild.id,
      },
    );
  }
};

export const execute = async (...[message]: ClientEvents[typeof name]) => {
  const locale = await getGuildLocale(message.guildId);

  await runWithLocale(locale, () =>
    Promise.all([
      crosspost(message),
      handleChatMessage(message),
      handleTicketMessage(message),
    ]),
  );
};
