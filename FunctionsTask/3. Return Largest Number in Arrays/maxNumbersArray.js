// №3 напишите функцию которая принимает на вход массив,
// состоящий из массивов целых чисел и возвращает массив состоящий из наибольшего числа каждого предоставленного подмассива
function maxNumbersArray(array) {
    let arr = [];
    array.forEach(element => {
        let maxNumber;
        for (let i = 0; i < element.length; i++) {
            if (element[i] > element[i - 1]) {
                maxNumber = element[i];
            }
        }
        arr.push(maxNumber);
        maxNumber = 0;
    });
    return arr;
}
// console.log(maxNumbersArray([[1, 2, 3], [2, 5, 2], [5, 8, 1, 0]]))

export default maxNumbersArray;