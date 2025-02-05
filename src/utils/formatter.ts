export const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

export const formatDollar = (number: number) => {
  const formattedNumber = USDollar.format(number).replace("$", "$ ");
  return formattedNumber;
};
