import { AsyncLocalStorage } from 'node:async_hooks';
import { z } from 'zod';

export const LocaleSchema = z.enum(['mk', 'tr']);
export type Locale = z.infer<typeof LocaleSchema>;

export const DEFAULT_LOCALE = 'mk' satisfies Locale;

const localeStorage = new AsyncLocalStorage<Locale>();

export const getLocale = (): Locale =>
  localeStorage.getStore() ?? DEFAULT_LOCALE;

// Everything awaited inside the callback resolves translations in the given
// locale, so call sites do not have to pass the guild language around.
export const runWithLocale = <T>(locale: Locale, callback: () => T): T =>
  localeStorage.run(locale, callback);

// Returns a view over the translation tables that always reads from the table
// of the active locale. The default table is the proxy target so that key
// enumeration keeps working outside of a locale context.
export const localized = <T extends object>(tables: Record<Locale, T>): T =>
  new Proxy(tables[DEFAULT_LOCALE], {
    get: (_target, property) => {
      const table = tables[getLocale()];
      const value: unknown = Reflect.get(table, property);

      return typeof value === 'function'
        ? (value as (...args: unknown[]) => unknown).bind(table)
        : value;
    },
  });
