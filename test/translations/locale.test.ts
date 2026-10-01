import { describe, expect, test } from 'vitest';

import { commandErrors } from '@/translations/commands.js';
import { toolStatusLabels } from '@/translations/labels.js';
import { getLocale, runWithLocale } from '@/translations/locale.js';
import * as mk from '@/translations/mk/commands.js';
import * as tr from '@/translations/tr/commands.js';

describe('localized translations', () => {
  test('use the default locale outside of a locale context', () => {
    expect(getLocale()).toBe('mk');
    expect(commandErrors.courseNotFound).toBe(mk.commandErrors.courseNotFound);
  });

  test('use the active locale inside of a locale context', () => {
    runWithLocale('tr', () => {
      expect(getLocale()).toBe('tr');
      expect(commandErrors.courseNotFound).toBe(
        tr.commandErrors.courseNotFound,
      );
    });

    expect(commandErrors.courseNotFound).toBe(mk.commandErrors.courseNotFound);
  });

  test('keep the active locale across awaits', async () => {
    await runWithLocale('tr', async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 0);
      });

      expect(commandErrors.courseNotFound).toBe(
        tr.commandErrors.courseNotFound,
      );
    });
  });

  test('keep concurrent locale contexts isolated', async () => {
    const read = async () => {
      await Promise.resolve();

      return commandErrors.courseNotFound;
    };

    const [turkish, macedonian] = await Promise.all([
      runWithLocale('tr', read),
      runWithLocale('mk', read),
    ]);

    expect(turkish).toBe(tr.commandErrors.courseNotFound);
    expect(macedonian).toBe(mk.commandErrors.courseNotFound);
  });

  test('enumerate the keys of the default table', () => {
    expect(Object.keys(commandErrors)).toStrictEqual(
      Object.keys(mk.commandErrors),
    );
  });

  test('support translation tables that are maps', () => {
    runWithLocale('tr', () => {
      expect(toolStatusLabels.get('recommend_thesis_committee')).toContain(
        'Jüri',
      );
    });
  });
});
