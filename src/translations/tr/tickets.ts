import { userMention } from 'discord.js';

import type { Ticket } from '@/modules/ticket/schemas/Ticket.js';

import type * as mk from '../mk/tickets.js';

export const ticketMessages = {
  createTicket: `# Destek talepleri\nBir sorunuz, sorununuz, öneriniz, şikâyetiniz veya benzeri bir konunuz varsa ilgili kişilere **özel** bir destek talebi gönderebilirsiniz. Talep türünü seçin ve açıklamanızı yazın. En kısa sürede yanıt alacaksınız.\n\nŞunlara talep gönderebilirsiniz:`,
  sendMessage:
    'Mesajınızı önümüzdeki 30 dakika içinde yazın. Aksi halde talep iptal edilecektir.',
  ticketClosedInactivity: 'Talep, hareketsizlik nedeniyle kapatıldı.',
} satisfies typeof mk.ticketMessages;

export const ticketMessageFunctions = {
  ticketClosedBy: (userId: string) =>
    `Talep ${userMention(userId)} tarafından kapatıldı.`,
  ticketCreated: (userId: string) =>
    `${userMention(userId)} Bu sizin özel destek talebiniz. Sorununuzu veya sorunuzu burada açıklayın. En kısa sürede yanıt alacaksınız. Talebi kapatmak isterseniz kapatma düğmesine basın.`,
  ticketLink: (ticketLink: string) => `Talebiniz oluşturuldu: ${ticketLink}`,
  ticketSendMessage: (ticketList: string) =>
    `Bir sorunuz, sorununuz, öneriniz, şikâyetiniz veya benzeri bir konunuz varsa ilgili kişilere **özel** bir destek talebi gönderebilirsiniz. Talep türünü seçin ve açıklamanızı yazın. En kısa sürede yanıt alacaksınız.\n\nŞunlara talep gönderebilirsiniz:\n${ticketList}`,
  ticketStarted: (roles: string) => `${roles} Size bir destek talebi açıldı.`,
  ticketTypes: (ticketTypes: Ticket[]) =>
    ticketTypes
      .map((ticket) => `- ${ticket.name}: ${ticket.description}`)
      .join('\n'),
} satisfies typeof mk.ticketMessageFunctions;
