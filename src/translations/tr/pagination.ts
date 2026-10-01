import type * as mk from '../mk/pagination.js';

export const paginationStringFunctions = {
  footer: ({
    label,
    page,
    pages,
    total,
  }: {
    label: string;
    page: number;
    pages: number;
    total: number;
  }) => `Sayfa: ${page} / ${pages}  •  ${label}: ${total}`,
  noEntries: (label: string) => `${label} yok.`,
} satisfies typeof mk.paginationStringFunctions;
