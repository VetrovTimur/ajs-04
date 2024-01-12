export default function calcTotal(purchases, applyDuscount) {
  const sum = purchases.reduce((total, item) => total + (item.count * item.price), 0);

  if (applyDuscount) {
    return sum * 0.5;
  }
  return sum;
}
