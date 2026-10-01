import { existsSync, readdirSync } from 'node:fs';
import { describe, expect, test } from 'vitest';

import { localizeCommand } from '@/core/commands/localization.js';

type CommandModule = {
  data: { toJSON: () => Node };
};

type Node = {
  description_localizations?: null | { tr?: null | string };
  name: string;
  options?: Node[];
};

const MODULES_DIRECTORY = 'src/modules';

const getChatCommandPaths = () =>
  readdirSync(MODULES_DIRECTORY).flatMap((module) => {
    const directory = `${MODULES_DIRECTORY}/${module}/commands/chat`;

    // eslint-disable-next-line security/detect-non-literal-fs-filename -- paths come from the local source tree
    if (!existsSync(directory)) {
      return [];
    }

    // eslint-disable-next-line security/detect-non-literal-fs-filename -- paths come from the local source tree
    return readdirSync(directory).map((file) => `../../${directory}/${file}`);
  });

const getMissingLocalizations = (node: Node, key: string): string[] => {
  const turkish = node.description_localizations?.tr;
  const options = node.options ?? [];

  return [
    ...(turkish ? [] : [key]),
    ...options.flatMap((option) =>
      getMissingLocalizations(option, `${key} ${option.name}`),
    ),
  ];
};

describe('command localization', () => {
  test('every chat command, subcommand and option has a Turkish description', async () => {
    const modules = await Promise.all(
      getChatCommandPaths().map(
        async (path) => (await import(path)) as CommandModule,
      ),
    );
    const commands = modules.map(
      (module) => localizeCommand(module.data.toJSON() as never) as Node,
    );

    expect(commands.length).toBeGreaterThan(0);
    expect(
      commands.flatMap((command) =>
        getMissingLocalizations(command, command.name),
      ),
    ).toStrictEqual([]);
  });

  test('context menu commands are left untouched', () => {
    const command = { name: 'Prompt', type: 3 } as never;

    expect(localizeCommand(command)).toStrictEqual({ name: 'Prompt', type: 3 });
  });
});
