import type * as mk from '../mk/components.js';

export const componentMessages = {
  allCommands:
    'Kullanabileceğiniz tüm komutlar bunlar. Komutları bu sunucuda veya özel mesajda çağırabilirsiniz.',
  allTickets: 'Tüm aktif destek talepleri bunlar.',
} satisfies typeof mk.componentMessages;

export const componentMessageFunctions = {
  allLinks: (command: string) =>
    `Mevcut tüm bağlantılar bunlar. Her birini ayrıca ${command} ile alabilirsiniz.`,
  allQuestions: (command: string) =>
    `Mevcut tüm sorular bunlar. Cevapları almak için ${command} kullanın.`,
} satisfies typeof mk.componentMessageFunctions;
