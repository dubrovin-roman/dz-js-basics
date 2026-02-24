/**
 * Проверка номера карты по алгоритму Луна (Luhn)
 * @param {string | number} cardNumber
 * @returns {boolean}
 */
function isValidCardLuhn(cardNumber) {
  if (cardNumber === null || cardNumber === undefined) return false;

  // Приводим к строке и убираем пробелы/дефисы
  const cleaned = String(cardNumber).replace(/[\s-]/g, "");

  // Должны остаться только цифры
  if (!/^\d+$/.test(cleaned)) return false;

  // Обычно длина карты 12–19 цифр (опциональная проверка)
  if (cleaned.length < 12 || cleaned.length > 19) return false;

  let sum = 0;
  let shouldDouble = false;

  // Идём справа налево
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = Number(cleaned[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

console.log(isValidCardLuhn("4111 1111 1111 1111")); // true (тестовый номер Visa)
console.log(isValidCardLuhn("4111-1111-1111-1112")); // false
console.log(isValidCardLuhn("1234 5678 9012 3456")); // false