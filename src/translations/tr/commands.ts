import {
  channelMention,
  codeBlock,
  type GuildPremiumTier,
  inlineCode,
  italic,
  userMention,
} from 'discord.js';

import type * as mk from '../mk/commands.js';

import { dateLocale } from './labels.js';

export const commandDescriptions = {
  about: 'Discord botu hakkında',
  anto: 'Rastgele bir Anto sözü getir',
  ask: 'Yapay zekâ asistanına soru gönder',
  'chat closest': 'En yakın soruları getir',
  'chat embed': 'Belgelerin embedding’lerini oluştur',
  'chat models': 'Dil modellerinin listesini getir',
  'chat query': 'Yapay zekâ asistanına soru gönder',
  'chat thread': 'Asistanla konuşmak için özel bir başlık oluştur',
  'chat unembedded': 'Embedding’i olmayan belgeleri getir',
  'config data': 'Depodaki verileri yenile',
  'config get': 'Yapılandırmayı getir',
  'config reload': 'Yapılandırmaları yenile',
  'config set': 'Yapılandırmayı değiştir',
  course: 'Ders hakkında bilgi getir',
  'credentials delete': 'Sağlayıcının API anahtarını sil',
  'credentials list': 'Kayıtlı API anahtarlarını göster',
  'credentials set': 'Sağlayıcı için API anahtarı ayarla',
  faq: 'Sık sorulan bir soruyu getir',
  help: 'Kullanılabilir tüm komutların listesini getir',
  home: 'Kaynak kodun bağlantısını getir',
  link: 'Sık aranan bir bağlantıyı getir',
  'list commands': 'Kullanılabilir tüm komutların listesini getir',
  'list links': 'Tüm bağlantıların listesini getir',
  'list questions': 'Tüm soruların listesini getir',
  office: 'Oda hakkında bilgi getir',
  prompt: 'Yapay zekâ asistanına soru gönder',
  room: 'Derslik hakkında bilgi getir',
  session: 'Sınav dönemi veya ara sınav haftası programını getir',
  staff: 'Öğretim üyesi hakkında bilgi getir',
  'ticket close': 'Destek talebini kapat',
  'ticket list': 'Tüm destek taleplerinin listesini getir',
  'ticket send': 'Destek talebi oluşturma mesajını gönder',
} satisfies typeof mk.commandDescriptions;

// Descriptions of commands that only group subcommands. Discord has no
// Macedonian locale, so these exist only as localizations of the base text.
export const commandGroupDescriptions: Record<string, string> = {
  chat: 'Yapay zekâ asistanı',
  config: 'Yapılandırma',
  credentials: 'API anahtarlarını yönet',
  list: 'Listeler',
  ticket: 'Destek talepleri',
};

// Keyed by the full command name followed by the option name.
export const commandOptionDescriptions: Record<string, string> = {
  'ask prompt': 'Yapay zekâ asistanı için soru',
  'chat closest embeddings-model': 'Embedding modeli',
  'chat closest limit': 'Döndürülecek en fazla soru sayısı',
  'chat closest query': 'En yakın soruları bulmak için soru',
  'chat closest threshold': 'Soruların benzerlik eşiği',
  'chat embed all-models':
    'Tüm modeller mi yoksa yalnızca seçilen mi kullanılsın',
  'chat embed all-questions':
    'Tüm belgeler mi yoksa yalnızca embedding’i olmayanlar mı işlensin',
  'chat embed embeddings-model': 'Embedding modeli',
  'chat embed question': 'Embedding’i oluşturulacak sorunun adı',
  'chat query embeddings-model': 'Embedding modeli',
  'chat query inference-model': 'Çıkarım modeli',
  'chat query max-tokens': 'Yanıt için en fazla token sayısı',
  'chat query prompt': 'Yapay zekâ asistanı için soru',
  'chat query reasoning':
    'Yanıttan önce düşünmeyi etkinleştir (model destekliyorsa)',
  'chat query temperature': 'Modelin sıcaklık değeri',
  'chat query top-p': 'Modelin Top P değeri',
  'chat unembedded embeddings-model': 'Embedding modeli',
  'config get key': 'Yapılandırma anahtarı',
  'config set key': 'Yapılandırma anahtarı',
  'config set value': 'Yapılandırma değeri',
  'course course': 'Ders',
  'course user': 'Kullanıcı',
  'credentials delete provider': 'Anahtarı silinecek sağlayıcı',
  'credentials set provider': 'API anahtarının sağlayıcısı',
  'faq question': 'Soru',
  'faq user': 'Kullanıcı',
  'link link': 'Bağlantı',
  'link user': 'Kullanıcı',
  'office room': 'Oda',
  'office user': 'Kullanıcı',
  'prompt prompt': 'Yapay zekâ asistanı için soru',
  'prompt reasoning':
    'Yanıttan önce düşünmeyi etkinleştir (model destekliyorsa)',
  'room room': 'Derslik',
  'room user': 'Kullanıcı',
  'session session': 'Sınav dönemi',
  'session user': 'Kullanıcı',
  'staff professor': 'Öğretim üyesi',
  'staff user': 'Kullanıcı',
  'ticket send channel': 'Mesajın gönderileceği kanal',
};

export const commandResponses = {
  chatThreadWelcome:
    'Burası asistanla konuşman için sana özel alan. Sorunu buraya yazabilirsin, sana cevap vereceğim. 🤖',
  configurationReloaded: 'Yapılandırma yenilendi.',
  configurationReloading: 'Yapılandırma yenileniyor...',
  dataReloaded: 'Veriler yenilendi.',
  dataReloading: 'Veriler yenileniyor...',
  feedbackRecorded: 'Geri bildiriminiz için teşekkür ederiz!',
  home: 'https://github.com/finki-hub/discord-bot',
  ticketClosed: 'Destek talebi kapatıldı.',
  ticketMessageSent: 'Destek talebi mesajı gönderildi.',
} satisfies typeof mk.commandResponses;

export const commandResponseFunctions = {
  chatThreadCreated: (threadId: string) =>
    `Özel başlığın oluşturuldu: ${channelMention(threadId)}`,

  chatThreadExisting: (threadId: string) =>
    `Zaten aktif bir konuşma başlığın var: ${channelMention(threadId)}`,

  chatThreadName: (displayName: string) => `Sohbet — ${displayName}`,

  commandFor: (userId: string): string => italic(`${userMention(userId)} için`),

  credentialDeleted: (provider: string) =>
    `${inlineCode(provider)} için API anahtarı silindi.`,

  credentialModalTitle: (provider: string) =>
    `${provider} için API anahtarı ayarla`,

  credentialSaved: (provider: string, baseUrl?: null | string) => {
    const target = baseUrl ? `${provider} (${baseUrl})` : provider;

    return `${target} için API anahtarı kaydedildi.`;
  },

  serverAnimatedEmojiStat: (emojiCount: number, maxCount: number) =>
    `Hareketli emojiler: ${emojiCount} / ${maxCount}`,

  serverBoostLevelStat: (boostLevel: GuildPremiumTier) =>
    `Seviye: ${boostLevel}`,

  serverBoostStat: (boostCount: number) => `Takviyeler: ${boostCount}`,

  serverChannelsStat: (channelCount: number) =>
    `Kanallar: ${channelCount} / 500`,

  serverEmojiStat: (emojiCount: number, maxCount: number) =>
    `Emojiler: ${emojiCount} / ${maxCount}`,

  serverInvitesStat: (inviteCount: number | string) =>
    `Davetler: ${inviteCount}`,

  serverMembersStat: (memberCount: number, maxMembers: null | number) =>
    maxMembers === null
      ? `Üyeler: ${memberCount}`
      : `Üyeler: ${memberCount} / ${maxMembers}`,

  serverRolesStat: (roleCount: number) => `Roller: ${roleCount} / 250`,

  serverSoundboardSoundsStat: (
    soundCount: number | string,
    maxCount: number | string,
  ) => `Sesler: ${soundCount} / ${maxCount}`,

  serverStickersStat: (stickerCount: number, maxCount: number) =>
    `Çıkartmalar: ${stickerCount} / ${maxCount}`,
} satisfies typeof mk.commandResponseFunctions;

export const commandErrors = {
  botMissingPermissions:
    'Botun bu komutu çalıştırmak için gerekli izinleri yok. Yöneticilerle iletişime geçin.',
  buttonNoPermission: 'Bu komut size ait değil.',
  chatThreadCreationFailed: 'Başlık oluşturulamadı. Tekrar deneyin.',
  chatThreadInvalidChannel:
    'Özel başlık yalnızca bir metin kanalında oluşturulabilir.',
  commandError:
    'Komut çalıştırılırken bir hata oluştu. Tekrar deneyin veya hatayı bildirin.',
  commandGuildOnly: 'Bu komut yalnızca bir sunucuda kullanılabilir.',
  commandNoPermission: 'Bu komutu çalıştırma izniniz yok.',
  commandNotFound: 'Komut bulunamadı.',
  configurationSavingFailed: 'Yapılandırma kaydedilemedi.',
  courseNotFound: 'Ders bulunamadı.',
  credentialRequired:
    'Bu sağlayıcı için API anahtarınız ayarlı değil. Ayarlamak için /credentials set kullanın.',
  dataFetchFailed: 'Veriler alınamadı.',
  dataReloadFailed: 'Veriler yenilenemedi. Ayrıntılar için günlüklere bakın.',
  faqNotFound: 'Soru bulunamadı.',
  feedbackDisabled: 'Geri bildirim etkin değil.',
  freeQuotaExhausted:
    'Günlük ücretsiz limitinizi doldurdunuz. Kendi API anahtarınız için /credentials set kullanın veya limit sıfırlandıktan sonra tekrar deneyin.',
  freeTierUnavailable:
    'Ücretsiz sponsorlu model şu anda kullanılamıyor. Daha sonra tekrar deneyin.',
  invalidChannel: 'Kanal geçersiz.',
  invalidCredential: 'Girilen API anahtarı veya base URL geçerli değil.',
  invalidInferenceModel:
    'Seçilen model kullanılamıyor. Önerilen listeden bir model seçin.',
  invalidTicket: 'Destek talebi geçerli değil.',
  invalidTicketType: 'Verilen destek talebi türü geçerli değil.',
  linkNotFound: 'Bağlantı bulunamadı.',
  linksFetchFailed: 'Bağlantılar alınamadı.',
  llmDisabled: 'Dil modeli kapalı.',
  llmNotReady: 'Dil modeli hazır değil. Daha sonra tekrar deneyin.',
  llmUnavailable: 'Dil modeli kullanılamıyor. Daha sonra tekrar deneyin.',
  noTicketMembers:
    'Talebin gönderilebileceği üye seçilmemiş. Başka bir kategori deneyin.',
  noTickets: 'Destek talebi yok.',
  questionsFetchFailed: 'Sorular alınamadı.',
  roomNotFound: 'Derslik bulunamadı.',
  sessionNotFound: 'Sınav dönemi bulunamadı.',
  sponsoredRequestInProgress:
    'Zaten devam eden bir ücretsiz isteğiniz var. Bitmesini bekleyip tekrar deneyin.',
  staffNotFound: 'Öğretim üyesi bulunamadı.',
  ticketingDisabled: 'Destek talepleri etkin değil.',
  unknownChatError: 'Soru gönderilirken bir hata oluştu. Tekrar deneyin.',
} satisfies typeof mk.commandErrors;

export const commandErrorFunctions = {
  freeQuotaExhausted: (resetsAt?: string) => {
    if (resetsAt === undefined) {
      return commandErrors.freeQuotaExhausted;
    }

    let resetInstant: Temporal.Instant;
    try {
      resetInstant = Temporal.Instant.from(resetsAt);
    } catch {
      return commandErrors.freeQuotaExhausted;
    }

    const localizedReset = resetInstant.toLocaleString(dateLocale, {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'UTC',
    });

    return `Günlük ücretsiz limitinizi doldurdunuz. Limit ${localizedReset} UTC tarihinde sıfırlanır. Kendi API anahtarınız için /credentials set kullanın veya bekleyin.`;
  },

  invalidConfiguration: (error: unknown) =>
    // @ts-expect-error error is unknown
    `Verilen yapılandırma geçerli değil: ${codeBlock('json', error)}`,
} satisfies typeof mk.commandErrorFunctions;
