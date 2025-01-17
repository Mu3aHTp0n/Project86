// №9 Написать функцию, которая на вход принимает масссив и целое число. 
// Функция должна разбить массив (первый аргумент) на группы длиной size (второй агрумент) и вернуть их в виде двумерного массива.
function sliceArray(array, n) {
    let newArray = [];
    for (let i = 0; i < array.length; i += n) {
        let someArray = array.slice(i, i + n);
        newArray.push(someArray);
    }
    return newArray;
}
console.log(sliceArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 2));

// export default sliceArray;