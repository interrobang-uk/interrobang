export const truncate = (input: string, len: number): string =>
  input.length > len ? `${input.substring(0, len).trim()}...` : input
