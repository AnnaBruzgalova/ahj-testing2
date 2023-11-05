export default function luhnValidate(value) {
  const cleanValue = String(value).replace(/\D/g, '');

  if (!cleanValue || cleanValue === 0) return false;

  let nCheck = 0;
  let bEven = false;

  for (let n = cleanValue.length - 1; n >= 0; n -= 1) {
    let nDigit = parseInt(cleanValue.charAt(n), 10);
    // eslint-disable-next-line no-cond-assign
    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}
