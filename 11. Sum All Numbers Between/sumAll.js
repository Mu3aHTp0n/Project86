// №11. Написать функцию, которая принимает на вход массив из двух чисел и возвращает сумму этих двух чисел плюс сумму всех чисел между ними.
// Наименьшее число не всегда будет на первом месте. (Например sumAll([4, 1]) должен возвращать 10)
function sumAll(array) {
    const maxNumber = array[0] > array[1] ? array[0] : array[1];
    const minNumber = array[0] < array[1] ? array[0] : array[1];
    let sum = 0;
    for (let i = minNumber; i <= maxNumber; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumAll([4, 1]));

export default sumAll;