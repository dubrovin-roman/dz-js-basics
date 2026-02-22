function bubbleSort(arr) {
  // Создаём копию массива, чтобы не изменять исходный
  const sortedArr = [...arr];
  const n = sortedArr.length;

  // Внешний цикл — проходит по всем элементам массива
  for (let i = 0; i < n - 1; i++) {
    // Внутренний цикл — сравнивает соседние элементы
    for (let j = 0; j < n - i - 1; j++) {
      // Если текущий элемент больше следующего — меняем их местами
      if (sortedArr[j] > sortedArr[j + 1]) {
        // Временная переменная для обмена
        const temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }

  return sortedArr;
}

const arr = [1, 40, -5, 10, 0];
const sortedArr = bubbleSort(arr);

console.log('Исходный массив:', arr);
console.log('Отсортированный массив:', sortedArr);