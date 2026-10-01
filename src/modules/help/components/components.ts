import {
  ContainerBuilder,
  heading,
  HeadingLevel,
  SeparatorSpacingSize,
} from 'discord.js';

import { getCommandMention } from '@/common/commands/utils.js';
import { aboutMessages } from '@/translations/about.js';

export const getAboutComponent = () => {
  const containerBuilder = new ContainerBuilder();

  containerBuilder
    .addTextDisplayComponents((textDisplay) =>
      textDisplay.setContent(heading(aboutMessages.botName, HeadingLevel.Two)),
    )
    .addSeparatorComponents((separator) =>
      separator.setSpacing(SeparatorSpacingSize.Large),
    )
    .addTextDisplayComponents((textDisplay) =>
      textDisplay.setContent(
        aboutMessages.aboutMessage(
          getCommandMention('help'),
          getCommandMention('list questions'),
        ),
      ),
    );

  return containerBuilder;
};
