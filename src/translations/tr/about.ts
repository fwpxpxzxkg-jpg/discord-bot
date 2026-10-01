import { hyperlink, userMention } from 'discord.js';

export const botName = 'FINKI Hub / Discord Botu';

export const aboutMessage = (helpCommand: string, faqCommand: string) =>
  `Bu Discord botu, ${hyperlink('FINKI Hub', 'https://finki-hub.com')} için ${userMention(
    '198249751001563136',
  )} ve ${hyperlink('diğer katkıda bulunanlar', 'https://github.com/orgs/finki-hub/people')} tarafından geliştirildi. Kod açık kaynaktır ve ${hyperlink(
    'GitHub',
    'https://github.com/finki-hub/discord-bot',
  )} üzerinde yer alır. Herhangi bir sorunuz, öneriniz veya sorununuz varsa bize Discord ya da GitHub üzerinden ulaşın. \n\nTüm komutları görmek için ${helpCommand}, tüm soruları görmek için ${faqCommand} yazın.`;
