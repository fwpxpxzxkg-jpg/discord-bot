import {
  type BotConfig,
  type BotConfigKeys,
} from '@/modules/admin/schemas/BotConfig.js';
import { DEFAULT_LOCALE } from '@/translations/locale.js';

export const DEFAULT_CONFIGURATION = {
  channels: undefined,
  crossposting: {
    channels: [],
    enabled: false,
  },
  errorWebhook: undefined,
  feedback: {
    enabled: true,
  },
  language: DEFAULT_LOCALE,
  models: {
    embeddings: 'BAAI/bge-m3',
    inference: 'claude-sonnet-5',
  },
  roles: undefined,
  ticketing: {
    enabled: false,
    tickets: undefined,
  },
} as const satisfies BotConfig satisfies Record<BotConfigKeys, unknown>;
