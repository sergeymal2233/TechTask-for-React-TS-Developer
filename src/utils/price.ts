export const formatMoneyToUpperUnit = (cents: number) => {
  return (cents / 100).toFixed(2)
}