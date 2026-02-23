function isValidDate(dateString) {
  if (typeof dateString !== 'string') {
    return false;
  }

  // Регулярное выражение для формата DD-MM-YYYY или DD/MM/YYYY
  const dateRegex = /^(\d{2})([-\/])(\d{2})\2(\d{4})$/;
  const match = dateString.match(dateRegex);

  if (!match) {
    return false;
  }

  const [, day, separator, month, year] = match;
  const dayNum = parseInt(day, 10);
  const monthNum = parseInt(month, 10) - 1; // Месяц в Date начинается с 0
  const yearNum = parseInt(year, 10);

  // Создаём дату и проверяем её корректность
  const testDate = new Date(yearNum, monthNum, dayNum);

  return (
    testDate.getFullYear() === yearNum &&
    testDate.getMonth() === monthNum &&
    testDate.getDate() === dayNum
  );
}

function getDateInFormatFromArray(arr) {
  return arr.filter((el) => isValidDate(el)).map((el) => {
    const separator = el.at(2);
    const temp = el.split(separator);
    return temp.join('-');
  });
}

const strings = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];
console.log(getDateInFormatFromArray(strings));