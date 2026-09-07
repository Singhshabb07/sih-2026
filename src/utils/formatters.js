export function formatCurrency(value, currency = "$") {
  return `${currency}${Number(value).toLocaleString("en-IN")}`;
}

export function formatPercentage(value) {
  const number = Number(value);

  return `${number >= 0 ? "+" : ""}${number.toFixed(1)}%`;
}

export function formatNumber(value) {
  return Number(value).toLocaleString("en-IN");
}

export function formatRate(value) {
  return `$${Number(value).toFixed(1)} / MT`;
}