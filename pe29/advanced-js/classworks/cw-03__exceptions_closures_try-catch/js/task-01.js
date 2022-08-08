/**
 * ЗАДАНИЕ - 1
 *
 * Написать функцию суммирования.
 * Аргументы:
 * 1 - callback функция с операцией
 * 2 и все последующие - числа с которыми ее нужно выполнить
 *
 * Возщвращаемое значение = возвращаемое значение callback функции
 *
 * В случае если хотябы один из аргументов является НЕ числом - выбрасывать исключение TypeError
 */

function sum(operation, ...numbers) {
  const result = numbers.every((num) => typeof (num) === 'number');

  if (!result) {
    throw new TypeError('not a number')
  } else {
    return operation(...numbers)
  }
}

function sumAllArgs(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr);
}

try {
  const check = sum(sumAllArgs, null, 90, 1, 9, 100);
  console.log(check);
} catch (e) {
  document.write(e.message);
  console.error("smth went wrong");
}

console.log('gogogog');

