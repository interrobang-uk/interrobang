export const truncate = (input: string, len: number): string =>
  input.length > len ? `${input.substring(0, len).trim()}...` : input

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

export const formatCurrency = input => formatter.format(input)
